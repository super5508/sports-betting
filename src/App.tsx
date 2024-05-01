import React, { useCallback, useEffect, useState } from "react";
import { Container, Card, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { FilterValue, FilterKey, Header, Toolbar } from "./components";

import {
  BetMarketTypeEnumTypeTwo,
  LeagueEnum,
  useBetCacheSubscription,
  useGamesDataQuery,
} from "./@generated/graphql/types-and-hooks";
import { showToast } from "./utils/toast";

const App: React.FC = () => {
  const [league, setLeague] = useState<LeagueEnum>(LeagueEnum.Nba);
  const [betMarketType, setBetMarketType] = useState<BetMarketTypeEnumTypeTwo>(
    BetMarketTypeEnumTypeTwo.MoneyLine
  );
  const [gameIds, setGameIds] = useState<string[]>([]);
  const { data } = useGamesDataQuery({
    variables: {
      ids: gameIds,
      league: league,
    },
    onCompleted: () => {
      showToast("Successfully get game data", "success");
    },
    skip: gameIds.length === 0,
  });

  const { data: subscriptionData } = useBetCacheSubscription({
    variables: {
      request: {
        league: league,
        betMarketType: betMarketType,
      },
    },
  });

  useEffect(() => {
    const newIds = subscriptionData?.betCache?.map((c) => c.gameId) ?? [];
    setGameIds(Array.from(new Set(newIds)));
  }, [subscriptionData]);

  const handleChange = useCallback(
    <K extends FilterKey>(key: K, value: FilterValue<K>) => {
      setGameIds([]);
      if (key === "league") {
        setLeague(value as LeagueEnum);
      } else if (key === "betMarketType") {
        setBetMarketType(value as BetMarketTypeEnumTypeTwo);
      }
    },
    []
  );

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "id",
      sortable: true,
      width: 300,
    },
    {
      field: "home",
      headerName: "Home Team",
      sortable: false,
      valueGetter: (_, row) => row.homeTeam.name,
      width: 200,
    },
    {
      field: "away",
      headerName: "Away Team",
      sortable: false,
      valueGetter: (_, row) => row.awayTeam.name,
      width: 200,
    },
  ];

  return (
    <>
      <Header />
      <Box sx={{ py: 3 }}>
        <Container>
          <Card variant="outlined" sx={{ mb: 2 }}>
            <Toolbar
              league={league}
              betMarketType={betMarketType}
              onChange={handleChange}
            />
          </Card>
          <Card variant="outlined" sx={{ p: 2 }}>
            <DataGrid
              sx={{ height: 600 }}
              rows={data?.games ?? []}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 100 },
                },
              }}
              pageSizeOptions={[100]}
            />
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default App;
