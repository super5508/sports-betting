import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Byte: any;
  Decimal: any;
  Guid: any;
  Long: any;
  UInt: any;
  UShort: any;
}

export interface AdminMutationType {
  readonly __typename: 'AdminMutationType';
  readonly betGroups?: Maybe<ReadonlyArray<Maybe<BetMarketTypeGroupEnumTypeTwo>>>;
}

export interface ArbitrageType {
  readonly __typename: 'ArbitrageType';
  readonly americanOdds: ReadonlyArray<Scalars['Int']>;
  readonly awayTeam?: Maybe<TeamType>;
  readonly betMarketId?: Maybe<BetMarketTypeEnumTypeTwo>;
  readonly betMarketSiteIds: ReadonlyArray<BetMarketSiteEnum>;
  readonly betValues?: Maybe<ReadonlyArray<Maybe<Scalars['Decimal']>>>;
  readonly foundDateTime?: Maybe<Scalars['Long']>;
  readonly game?: Maybe<IGameType>;
  readonly gameLiveData?: Maybe<GameLiveDataType>;
  readonly homeTeam?: Maybe<TeamType>;
  readonly id: Scalars['ID'];
  readonly league: LeagueEnum;
  readonly player?: Maybe<PlayerType>;
  readonly rOI: Scalars['Decimal'];
  readonly teams?: Maybe<ReadonlyArray<Maybe<TeamType>>>;
  readonly urlBets?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

export interface BetMarketConditionType {
  readonly __typename: 'BetMarketConditionType';
  readonly betValue?: Maybe<Scalars['Decimal']>;
  readonly betValueMax?: Maybe<Scalars['Decimal']>;
  readonly marketType: BetMarketTypeEnum;
  readonly overUnder?: Maybe<BetMarketOverOrUnderEnum>;
  readonly playerId?: Maybe<Scalars['UInt']>;
  readonly teamId?: Maybe<Scalars['UShort']>;
}

export interface BetMarketInfoType {
  readonly __typename: 'BetMarketInfoType';
  readonly displayName: Scalars['String'];
  readonly groupValue: BetMarketTypeGroupEnum;
  readonly order: Scalars['UInt'];
  readonly time: BetMarketTypeTimeEnum;
  readonly value: BetMarketTypeEnum;
}

export interface BetMarketListingType {
  readonly __typename: 'BetMarketListingType';
  readonly americanOdds?: Maybe<Scalars['Int']>;
  readonly foundDateTime?: Maybe<Scalars['Long']>;
  readonly isPrimary: Scalars['Boolean'];
  readonly marketId?: Maybe<Scalars['String']>;
  readonly selectionId?: Maybe<Scalars['String']>;
  readonly site?: Maybe<BetSiteType>;
  readonly siteId: BetMarketSiteEnum;
}

export enum BetMarketOverOrUnderEnum {
  Between = 'BETWEEN',
  Exactly = 'EXACTLY',
  Over = 'OVER',
  Under = 'UNDER'
}

export enum BetMarketSiteEnum {
  BallyBet = 'BALLY_BET',
  Betano = 'BETANO',
  Betobet = 'BETOBET',
  BetwayCa = 'BETWAY_CA',
  BetwayUs = 'BETWAY_US',
  Bet_99 = 'BET_99',
  Bet_365 = 'BET_365',
  BetFred = 'BET_FRED',
  BetJack = 'BET_JACK',
  BetOnlineAg = 'BET_ONLINE_AG',
  BetPlays = 'BET_PLAYS',
  BetRegal = 'BET_REGAL',
  BetRivers = 'BET_RIVERS',
  BlueBet = 'BLUE_BET',
  Bodog = 'BODOG',
  BookmakerEu = 'BOOKMAKER_EU',
  Bovada = 'BOVADA',
  Caesars = 'CAESARS',
  Circa = 'CIRCA',
  ClutchBet = 'CLUTCH_BET',
  CoolBet = 'COOL_BET',
  DexSport = 'DEX_SPORT',
  DraftKings = 'DRAFT_KINGS',
  EspnBet = 'ESPN_BET',
  Fanatics = 'FANATICS',
  FanDuel = 'FAN_DUEL',
  Fliff = 'FLIFF',
  HardRock = 'HARD_ROCK',
  Ladbrokes = 'LADBROKES',
  LowVig = 'LOW_VIG',
  Mgm = 'MGM',
  MyBookie = 'MY_BOOKIE',
  NoVig = 'NO_VIG',
  OverTimeMarkets = 'OVER_TIME_MARKETS',
  PartyPoker = 'PARTY_POKER',
  Pinnacle = 'PINNACLE',
  PointsBet = 'POINTS_BET',
  PrimeSports = 'PRIME_SPORTS',
  ProphetBetting = 'PROPHET_BETTING',
  ProLinePlus = 'PRO_LINE_PLUS',
  Ps_3838 = 'PS_3838',
  SportsInteraction = 'SPORTS_INTERACTION',
  SportTrade = 'SPORT_TRADE',
  Stake = 'STAKE',
  Stx = 'STX',
  SugarHouse = 'SUGAR_HOUSE',
  Superbook = 'SUPERBOOK',
  TheScore = 'THE_SCORE',
  Tipico = 'TIPICO',
  UniBet = 'UNI_BET',
  VirginBet = 'VIRGIN_BET',
  Windcreek = 'WINDCREEK',
  Wynn = 'WYNN',
  '888Sport' = '_888_SPORT'
}

export enum BetMarketSiteEnumTypeTwo {
  BallyBet = 'BALLY_BET',
  Betano = 'BETANO',
  Betobet = 'BETOBET',
  BetwayCa = 'BETWAY_CA',
  BetwayUs = 'BETWAY_US',
  Bet_99 = 'BET_99',
  Bet_365 = 'BET_365',
  BetFred = 'BET_FRED',
  BetJack = 'BET_JACK',
  BetOnlineAg = 'BET_ONLINE_AG',
  BetPlays = 'BET_PLAYS',
  BetRegal = 'BET_REGAL',
  BetRivers = 'BET_RIVERS',
  BlueBet = 'BLUE_BET',
  Bodog = 'BODOG',
  BookmakerEu = 'BOOKMAKER_EU',
  Bovada = 'BOVADA',
  Caesars = 'CAESARS',
  Circa = 'CIRCA',
  ClutchBet = 'CLUTCH_BET',
  CoolBet = 'COOL_BET',
  DexSport = 'DEX_SPORT',
  DraftKings = 'DRAFT_KINGS',
  EspnBet = 'ESPN_BET',
  Fanatics = 'FANATICS',
  FanDuel = 'FAN_DUEL',
  Fliff = 'FLIFF',
  HardRock = 'HARD_ROCK',
  Ladbrokes = 'LADBROKES',
  LowVig = 'LOW_VIG',
  Mgm = 'MGM',
  MyBookie = 'MY_BOOKIE',
  NoVig = 'NO_VIG',
  OverTimeMarkets = 'OVER_TIME_MARKETS',
  PartyPoker = 'PARTY_POKER',
  Pinnacle = 'PINNACLE',
  PointsBet = 'POINTS_BET',
  PrimeSports = 'PRIME_SPORTS',
  ProphetBetting = 'PROPHET_BETTING',
  ProLinePlus = 'PRO_LINE_PLUS',
  Ps_3838 = 'PS_3838',
  SportsInteraction = 'SPORTS_INTERACTION',
  SportTrade = 'SPORT_TRADE',
  Stake = 'STAKE',
  Stx = 'STX',
  SugarHouse = 'SUGAR_HOUSE',
  Superbook = 'SUPERBOOK',
  TheScore = 'THE_SCORE',
  Tipico = 'TIPICO',
  UniBet = 'UNI_BET',
  VirginBet = 'VIRGIN_BET',
  Windcreek = 'WINDCREEK',
  Wynn = 'WYNN',
  '888Sport' = '_888_SPORT'
}

export interface BetMarketType {
  readonly __typename: 'BetMarketType';
  readonly conditions?: Maybe<ReadonlyArray<Maybe<BetMarketConditionType>>>;
  readonly gameId: Scalars['ID'];
  readonly listings?: Maybe<ReadonlyArray<Maybe<BetMarketListingType>>>;
}

export enum BetMarketTypeEnum {
  DoubleResultMulti = 'DOUBLE_RESULT_MULTI',
  FirstFieldGoalTeam = 'FIRST_FIELD_GOAL_TEAM',
  FirstFieldGoalTeamExactMulti = 'FIRST_FIELD_GOAL_TEAM_EXACT_MULTI',
  FirstFieldGoalType = 'FIRST_FIELD_GOAL_TYPE',
  GameEmptyNetGoal = 'GAME_EMPTY_NET_GOAL',
  GameGoalScoredBothHalves = 'GAME_GOAL_SCORED_BOTH_HALVES',
  GameGoalScoredBothTeams = 'GAME_GOAL_SCORED_BOTH_TEAMS',
  GameGoalScoredBothTeams_3Way = 'GAME_GOAL_SCORED_BOTH_TEAMS_3_WAY',
  GameGoalScoredBothTeamsBothHalves = 'GAME_GOAL_SCORED_BOTH_TEAMS_BOTH_HALVES',
  GameGoalScoredBothTeamsFirstHalf = 'GAME_GOAL_SCORED_BOTH_TEAMS_FIRST_HALF',
  GameGoalScoredBothTeamsNoDraw = 'GAME_GOAL_SCORED_BOTH_TEAMS_NO_DRAW',
  GameGoalScoredBothTeamsSecondHalf = 'GAME_GOAL_SCORED_BOTH_TEAMS_SECOND_HALF',
  GameGoalScoredFirstHalf = 'GAME_GOAL_SCORED_FIRST_HALF',
  GameGoalScoredSecondHalf = 'GAME_GOAL_SCORED_SECOND_HALF',
  GameGrandSlam = 'GAME_GRAND_SLAM',
  GameOvertime = 'GAME_OVERTIME',
  GameOwnGoal = 'GAME_OWN_GOAL',
  GamePenaltyAwarded = 'GAME_PENALTY_AWARDED',
  GameRedCardGiven = 'GAME_RED_CARD_GIVEN',
  MoneyLine = 'MONEY_LINE',
  MoneyLine_3Way = 'MONEY_LINE_3_WAY',
  MoneyLineEighthInning = 'MONEY_LINE_EIGHTH_INNING',
  MoneyLineEighthInning_3Way = 'MONEY_LINE_EIGHTH_INNING_3_WAY',
  MoneyLineFifthInning = 'MONEY_LINE_FIFTH_INNING',
  MoneyLineFifthInning_3Way = 'MONEY_LINE_FIFTH_INNING_3_WAY',
  MoneyLineFirstHalf = 'MONEY_LINE_FIRST_HALF',
  MoneyLineFirstHalf_3Way = 'MONEY_LINE_FIRST_HALF_3_WAY',
  MoneyLineFirstInning = 'MONEY_LINE_FIRST_INNING',
  MoneyLineFirstInning_3Way = 'MONEY_LINE_FIRST_INNING_3_WAY',
  MoneyLineFirstQuarter = 'MONEY_LINE_FIRST_QUARTER',
  MoneyLineFirstQuarter_3Way = 'MONEY_LINE_FIRST_QUARTER_3_WAY',
  MoneyLineFourthInning = 'MONEY_LINE_FOURTH_INNING',
  MoneyLineFourthInning_3Way = 'MONEY_LINE_FOURTH_INNING_3_WAY',
  MoneyLineFourthQuarter = 'MONEY_LINE_FOURTH_QUARTER',
  MoneyLineFourthQuarter_3Way = 'MONEY_LINE_FOURTH_QUARTER_3_WAY',
  MoneyLineNinthInning = 'MONEY_LINE_NINTH_INNING',
  MoneyLineNinthInning_3Way = 'MONEY_LINE_NINTH_INNING_3_WAY',
  MoneyLineNoOt = 'MONEY_LINE_NO_OT',
  MoneyLineNoOt_3Way = 'MONEY_LINE_NO_OT_3_WAY',
  MoneyLineSecondHalf = 'MONEY_LINE_SECOND_HALF',
  MoneyLineSecondHalf_3Way = 'MONEY_LINE_SECOND_HALF_3_WAY',
  MoneyLineSecondHalfNoOt = 'MONEY_LINE_SECOND_HALF_NO_OT',
  MoneyLineSecondHalfNoOt_3Way = 'MONEY_LINE_SECOND_HALF_NO_OT_3_WAY',
  MoneyLineSecondInning = 'MONEY_LINE_SECOND_INNING',
  MoneyLineSecondInning_3Way = 'MONEY_LINE_SECOND_INNING_3_WAY',
  MoneyLineSecondQuarter = 'MONEY_LINE_SECOND_QUARTER',
  MoneyLineSecondQuarter_3Way = 'MONEY_LINE_SECOND_QUARTER_3_WAY',
  MoneyLineSeventhInning = 'MONEY_LINE_SEVENTH_INNING',
  MoneyLineSeventhInning_3Way = 'MONEY_LINE_SEVENTH_INNING_3_WAY',
  MoneyLineSixthInning = 'MONEY_LINE_SIXTH_INNING',
  MoneyLineSixthInning_3Way = 'MONEY_LINE_SIXTH_INNING_3_WAY',
  MoneyLineTenthInning = 'MONEY_LINE_TENTH_INNING',
  MoneyLineTenthInning_3Way = 'MONEY_LINE_TENTH_INNING_3_WAY',
  MoneyLineThirdInning = 'MONEY_LINE_THIRD_INNING',
  MoneyLineThirdInning_3Way = 'MONEY_LINE_THIRD_INNING_3_WAY',
  MoneyLineThirdQuarter = 'MONEY_LINE_THIRD_QUARTER',
  MoneyLineThirdQuarter_3Way = 'MONEY_LINE_THIRD_QUARTER_3_WAY',
  MoneyLineToQualify = 'MONEY_LINE_TO_QUALIFY',
  PlayerFirstFieldGoalExactMulti = 'PLAYER_FIRST_FIELD_GOAL_EXACT_MULTI',
  PlayerFirstFieldGoalMulti = 'PLAYER_FIRST_FIELD_GOAL_MULTI',
  PlayerFirstFieldGoalTypeMulti = 'PLAYER_FIRST_FIELD_GOAL_TYPE_MULTI',
  PlayerPropAnyTimeTouchdown = 'PLAYER_PROP_ANY_TIME_TOUCHDOWN',
  PlayerPropAssists = 'PLAYER_PROP_ASSISTS',
  PlayerPropAssistsFirstQuarter = 'PLAYER_PROP_ASSISTS_FIRST_QUARTER',
  PlayerPropAssistsFourthQuarter = 'PLAYER_PROP_ASSISTS_FOURTH_QUARTER',
  PlayerPropAssistsSecondQuarter = 'PLAYER_PROP_ASSISTS_SECOND_QUARTER',
  PlayerPropAssistsThirdQuarter = 'PLAYER_PROP_ASSISTS_THIRD_QUARTER',
  PlayerPropBases = 'PLAYER_PROP_BASES',
  PlayerPropBattedStrikeouts = 'PLAYER_PROP_BATTED_STRIKEOUTS',
  PlayerPropBattedWalk = 'PLAYER_PROP_BATTED_WALK',
  PlayerPropBlockedShots = 'PLAYER_PROP_BLOCKED_SHOTS',
  PlayerPropBlocks = 'PLAYER_PROP_BLOCKS',
  PlayerPropCard = 'PLAYER_PROP_CARD',
  PlayerPropCaughtInterceptions = 'PLAYER_PROP_CAUGHT_INTERCEPTIONS',
  PlayerPropDouble = 'PLAYER_PROP_DOUBLE',
  PlayerPropDoubleDouble = 'PLAYER_PROP_DOUBLE_DOUBLE',
  PlayerPropExtraPointMade = 'PLAYER_PROP_EXTRA_POINT_MADE',
  PlayerPropFieldGoalsMade = 'PLAYER_PROP_FIELD_GOALS_MADE',
  PlayerPropFirstTouchdown = 'PLAYER_PROP_FIRST_TOUCHDOWN',
  PlayerPropGoalsAgainst = 'PLAYER_PROP_GOALS_AGAINST',
  PlayerPropGoalsScored = 'PLAYER_PROP_GOALS_SCORED',
  PlayerPropGrandSlam = 'PLAYER_PROP_GRAND_SLAM',
  PlayerPropHit = 'PLAYER_PROP_HIT',
  PlayerPropHomeRun = 'PLAYER_PROP_HOME_RUN',
  PlayerPropKickingPoints = 'PLAYER_PROP_KICKING_POINTS',
  PlayerPropLastTouchdown = 'PLAYER_PROP_LAST_TOUCHDOWN',
  PlayerPropLongestCompletion = 'PLAYER_PROP_LONGEST_COMPLETION',
  PlayerPropLongestReception = 'PLAYER_PROP_LONGEST_RECEPTION',
  PlayerPropLongestRush = 'PLAYER_PROP_LONGEST_RUSH',
  PlayerPropPasses = 'PLAYER_PROP_PASSES',
  PlayerPropPassingAttempts = 'PLAYER_PROP_PASSING_ATTEMPTS',
  PlayerPropPassingCompletions = 'PLAYER_PROP_PASSING_COMPLETIONS',
  PlayerPropPassingRushingYards = 'PLAYER_PROP_PASSING_RUSHING_YARDS',
  PlayerPropPassingTouchdowns = 'PLAYER_PROP_PASSING_TOUCHDOWNS',
  PlayerPropPassingYards = 'PLAYER_PROP_PASSING_YARDS',
  PlayerPropPoints = 'PLAYER_PROP_POINTS',
  PlayerPropPointsAssists = 'PLAYER_PROP_POINTS_ASSISTS',
  PlayerPropPointsAssistsRebounds = 'PLAYER_PROP_POINTS_ASSISTS_REBOUNDS',
  PlayerPropPointsBlocks = 'PLAYER_PROP_POINTS_BLOCKS',
  PlayerPropPointsFirstQuarter = 'PLAYER_PROP_POINTS_FIRST_QUARTER',
  PlayerPropPointsFourthQuarter = 'PLAYER_PROP_POINTS_FOURTH_QUARTER',
  PlayerPropPointsRebounds = 'PLAYER_PROP_POINTS_REBOUNDS',
  PlayerPropPointsSecondQuarter = 'PLAYER_PROP_POINTS_SECOND_QUARTER',
  PlayerPropPointsThirdQuarter = 'PLAYER_PROP_POINTS_THIRD_QUARTER',
  PlayerPropPowerPlayPoints = 'PLAYER_PROP_POWER_PLAY_POINTS',
  PlayerPropRbi = 'PLAYER_PROP_RBI',
  PlayerPropRebounds = 'PLAYER_PROP_REBOUNDS',
  PlayerPropReboundsAssists = 'PLAYER_PROP_REBOUNDS_ASSISTS',
  PlayerPropReboundsFirstQuarter = 'PLAYER_PROP_REBOUNDS_FIRST_QUARTER',
  PlayerPropReboundsFourthQuarter = 'PLAYER_PROP_REBOUNDS_FOURTH_QUARTER',
  PlayerPropReboundsSecondQuarter = 'PLAYER_PROP_REBOUNDS_SECOND_QUARTER',
  PlayerPropReboundsThirdQuarter = 'PLAYER_PROP_REBOUNDS_THIRD_QUARTER',
  PlayerPropReceivingYards = 'PLAYER_PROP_RECEIVING_YARDS',
  PlayerPropRecordedWin = 'PLAYER_PROP_RECORDED_WIN',
  PlayerPropRedCard = 'PLAYER_PROP_RED_CARD',
  PlayerPropRun = 'PLAYER_PROP_RUN',
  PlayerPropRunHit = 'PLAYER_PROP_RUN_HIT',
  PlayerPropRunHitRbi = 'PLAYER_PROP_RUN_HIT_RBI',
  PlayerPropRunRbi = 'PLAYER_PROP_RUN_RBI',
  PlayerPropRushingAttempts = 'PLAYER_PROP_RUSHING_ATTEMPTS',
  PlayerPropRushingYards = 'PLAYER_PROP_RUSHING_YARDS',
  PlayerPropSacks = 'PLAYER_PROP_SACKS',
  PlayerPropScoreAndAssist = 'PLAYER_PROP_SCORE_AND_ASSIST',
  PlayerPropScoreOrAssist = 'PLAYER_PROP_SCORE_OR_ASSIST',
  PlayerPropShots = 'PLAYER_PROP_SHOTS',
  PlayerPropShotsEachHalf = 'PLAYER_PROP_SHOTS_EACH_HALF',
  PlayerPropShotsFirstHalf = 'PLAYER_PROP_SHOTS_FIRST_HALF',
  PlayerPropShotsOnGoal = 'PLAYER_PROP_SHOTS_ON_GOAL',
  PlayerPropShotsOnGoalEachHalf = 'PLAYER_PROP_SHOTS_ON_GOAL_EACH_HALF',
  PlayerPropShotsOnGoalFirstHalf = 'PLAYER_PROP_SHOTS_ON_GOAL_FIRST_HALF',
  PlayerPropShotsOnGoalSecondHalf = 'PLAYER_PROP_SHOTS_ON_GOAL_SECOND_HALF',
  PlayerPropShotsSaved = 'PLAYER_PROP_SHOTS_SAVED',
  PlayerPropShotsSavedNoOt = 'PLAYER_PROP_SHOTS_SAVED_NO_OT',
  PlayerPropShotsSecondHalf = 'PLAYER_PROP_SHOTS_SECOND_HALF',
  PlayerPropShutout = 'PLAYER_PROP_SHUTOUT',
  PlayerPropSingle = 'PLAYER_PROP_SINGLE',
  PlayerPropSoloTackles = 'PLAYER_PROP_SOLO_TACKLES',
  PlayerPropSteals = 'PLAYER_PROP_STEALS',
  PlayerPropStealsBlocks = 'PLAYER_PROP_STEALS_BLOCKS',
  PlayerPropStolenBase = 'PLAYER_PROP_STOLEN_BASE',
  PlayerPropTacklesAssists = 'PLAYER_PROP_TACKLES_ASSISTS',
  PlayerPropTackleSoloAndAssist = 'PLAYER_PROP_TACKLE_SOLO_AND_ASSIST',
  PlayerPropThreePointer = 'PLAYER_PROP_THREE_POINTER',
  PlayerPropThrownEarnedRun = 'PLAYER_PROP_THROWN_EARNED_RUN',
  PlayerPropThrownHits = 'PLAYER_PROP_THROWN_HITS',
  PlayerPropThrownInterceptions = 'PLAYER_PROP_THROWN_INTERCEPTIONS',
  PlayerPropThrownOuts = 'PLAYER_PROP_THROWN_OUTS',
  PlayerPropThrownStrikeouts = 'PLAYER_PROP_THROWN_STRIKEOUTS',
  PlayerPropThrownWalk = 'PLAYER_PROP_THROWN_WALK',
  PlayerPropTotalReceptions = 'PLAYER_PROP_TOTAL_RECEPTIONS',
  PlayerPropTotalScrimmageYards = 'PLAYER_PROP_TOTAL_SCRIMMAGE_YARDS',
  PlayerPropTriple = 'PLAYER_PROP_TRIPLE',
  PlayerPropTripleDouble = 'PLAYER_PROP_TRIPLE_DOUBLE',
  PlayerPropTurnovers = 'PLAYER_PROP_TURNOVERS',
  PlayerPropTurnoversSteals = 'PLAYER_PROP_TURNOVERS_STEALS',
  PlayerPropTurnoversStealsBlocks = 'PLAYER_PROP_TURNOVERS_STEALS_BLOCKS',
  PlayerPropYellowCard = 'PLAYER_PROP_YELLOW_CARD',
  RaceToPoints = 'RACE_TO_POINTS',
  RaceToPoints_3Way = 'RACE_TO_POINTS_3_WAY',
  RaceToPointsFirstHalf = 'RACE_TO_POINTS_FIRST_HALF',
  RaceToPointsFirstHalf_3Way = 'RACE_TO_POINTS_FIRST_HALF_3_WAY',
  RaceToPointsFirstQuarter = 'RACE_TO_POINTS_FIRST_QUARTER',
  RaceToPointsFirstQuarter_3Way = 'RACE_TO_POINTS_FIRST_QUARTER_3_WAY',
  RaceToPointsFourthQuarter = 'RACE_TO_POINTS_FOURTH_QUARTER',
  RaceToPointsFourthQuarter_3Way = 'RACE_TO_POINTS_FOURTH_QUARTER_3_WAY',
  RaceToPointsSecondHalf = 'RACE_TO_POINTS_SECOND_HALF',
  RaceToPointsSecondHalf_3Way = 'RACE_TO_POINTS_SECOND_HALF_3_WAY',
  RaceToPointsSecondQuarter = 'RACE_TO_POINTS_SECOND_QUARTER',
  RaceToPointsSecondQuarter_3Way = 'RACE_TO_POINTS_SECOND_QUARTER_3_WAY',
  RaceToPointsThirdQuarter = 'RACE_TO_POINTS_THIRD_QUARTER',
  RaceToPointsThirdQuarter_3Way = 'RACE_TO_POINTS_THIRD_QUARTER_3_WAY',
  Spread = 'SPREAD',
  Spread_3Way = 'SPREAD_3_WAY',
  SpreadCards = 'SPREAD_CARDS',
  SpreadCards_3Way = 'SPREAD_CARDS_3_WAY',
  SpreadCorners = 'SPREAD_CORNERS',
  SpreadEighthInning = 'SPREAD_EIGHTH_INNING',
  SpreadFifthInning = 'SPREAD_FIFTH_INNING',
  SpreadFirstHalf = 'SPREAD_FIRST_HALF',
  SpreadFirstHalf_3Way = 'SPREAD_FIRST_HALF_3_WAY',
  SpreadFirstInning = 'SPREAD_FIRST_INNING',
  SpreadFirstQuarter = 'SPREAD_FIRST_QUARTER',
  SpreadFirstQuarter_3Way = 'SPREAD_FIRST_QUARTER_3_WAY',
  SpreadFourthInning = 'SPREAD_FOURTH_INNING',
  SpreadFourthQuarter = 'SPREAD_FOURTH_QUARTER',
  SpreadFourthQuarter_3Way = 'SPREAD_FOURTH_QUARTER_3_WAY',
  SpreadNinthInning = 'SPREAD_NINTH_INNING',
  SpreadNoOt = 'SPREAD_NO_OT',
  SpreadNoOt_3Way = 'SPREAD_NO_OT_3_WAY',
  SpreadSecondHalf = 'SPREAD_SECOND_HALF',
  SpreadSecondHalfNoOt = 'SPREAD_SECOND_HALF_NO_OT',
  SpreadSecondHalfNoOt_3Way = 'SPREAD_SECOND_HALF_NO_OT_3_WAY',
  SpreadSecondInning = 'SPREAD_SECOND_INNING',
  SpreadSecondQuarter = 'SPREAD_SECOND_QUARTER',
  SpreadSecondQuarter_3Way = 'SPREAD_SECOND_QUARTER_3_WAY',
  SpreadSeventhInning = 'SPREAD_SEVENTH_INNING',
  SpreadSixthInning = 'SPREAD_SIXTH_INNING',
  SpreadTenthInning = 'SPREAD_TENTH_INNING',
  SpreadThirdInning = 'SPREAD_THIRD_INNING',
  SpreadThirdQuarter = 'SPREAD_THIRD_QUARTER',
  SpreadThirdQuarter_3Way = 'SPREAD_THIRD_QUARTER_3_WAY',
  TeamAwardedPenalty = 'TEAM_AWARDED_PENALTY',
  TeamMostCards = 'TEAM_MOST_CARDS',
  TeamMostCards_3Way = 'TEAM_MOST_CARDS_3_WAY',
  TeamMostCardsSpread = 'TEAM_MOST_CARDS_SPREAD',
  TeamMostCardsSpread_3Way = 'TEAM_MOST_CARDS_SPREAD_3_WAY',
  TeamMostCorners_3Way = 'TEAM_MOST_CORNERS_3_WAY',
  TeamMostCornersSpread_3Way = 'TEAM_MOST_CORNERS_SPREAD_3_WAY',
  TeamMostOffsides_3Way = 'TEAM_MOST_OFFSIDES_3_WAY',
  TeamScoreBothHalves = 'TEAM_SCORE_BOTH_HALVES',
  TeamScoreFirst = 'TEAM_SCORE_FIRST',
  TeamScoreFirst_3Way = 'TEAM_SCORE_FIRST_3_WAY',
  TeamScoreFirstFirstHalf_3Way = 'TEAM_SCORE_FIRST_FIRST_HALF_3_WAY',
  TeamScoreFirstSecondHalf = 'TEAM_SCORE_FIRST_SECOND_HALF',
  TeamScoreFirstSecondHalf_3Way = 'TEAM_SCORE_FIRST_SECOND_HALF_3_WAY',
  TeamScoreFromPenalty = 'TEAM_SCORE_FROM_PENALTY',
  TeamScoreLast = 'TEAM_SCORE_LAST',
  TeamScoreLast_3Way = 'TEAM_SCORE_LAST_3_WAY',
  TeamScoreLastFirstHalf_3Way = 'TEAM_SCORE_LAST_FIRST_HALF_3_WAY',
  TeamScoreLastSecondHalf_3Way = 'TEAM_SCORE_LAST_SECOND_HALF_3_WAY',
  TeamWinningAtHTorFt = 'TEAM_WINNING_AT_H_TOR_FT',
  TeamWinBothHalves = 'TEAM_WIN_BOTH_HALVES',
  TeamWinBothHalves_3Way = 'TEAM_WIN_BOTH_HALVES_3_WAY',
  TeamWinCleanSheet = 'TEAM_WIN_CLEAN_SHEET',
  TeamWinCleanSheetFirstHalf = 'TEAM_WIN_CLEAN_SHEET_FIRST_HALF',
  TeamWinCleanSheetSecondHalf = 'TEAM_WIN_CLEAN_SHEET_SECOND_HALF',
  TeamWinEitherHalves = 'TEAM_WIN_EITHER_HALVES',
  TeamWinEitherHalves_3Way = 'TEAM_WIN_EITHER_HALVES_3_WAY',
  TeamWinWithShutout = 'TEAM_WIN_WITH_SHUTOUT',
  TeamWinWithShutoutFirstHalfNoOt = 'TEAM_WIN_WITH_SHUTOUT_FIRST_HALF_NO_OT',
  TeamWinWithShutoutNoOt = 'TEAM_WIN_WITH_SHUTOUT_NO_OT',
  TeamWinWithShutoutSecondHalfNoOt = 'TEAM_WIN_WITH_SHUTOUT_SECOND_HALF_NO_OT',
  TotalGameAssistsTeam = 'TOTAL_GAME_ASSISTS_TEAM',
  TotalGameBases = 'TOTAL_GAME_BASES',
  TotalGameBasesStolen = 'TOTAL_GAME_BASES_STOLEN',
  TotalGameBasesStolenTeam = 'TOTAL_GAME_BASES_STOLEN_TEAM',
  TotalGameBasesTeam = 'TOTAL_GAME_BASES_TEAM',
  TotalGameBlocksTeam = 'TOTAL_GAME_BLOCKS_TEAM',
  TotalGameCards = 'TOTAL_GAME_CARDS',
  TotalGameCardsFirstHalf = 'TOTAL_GAME_CARDS_FIRST_HALF',
  TotalGameCardsSecondHalfNoOt = 'TOTAL_GAME_CARDS_SECOND_HALF_NO_OT',
  TotalGameCardsTeam = 'TOTAL_GAME_CARDS_TEAM',
  TotalGameCorners = 'TOTAL_GAME_CORNERS',
  TotalGameCornersFirstHalf = 'TOTAL_GAME_CORNERS_FIRST_HALF',
  TotalGameCornersSecondHalf = 'TOTAL_GAME_CORNERS_SECOND_HALF',
  TotalGameCornersTeam = 'TOTAL_GAME_CORNERS_TEAM',
  TotalGameCornersTeamFirstHalf = 'TOTAL_GAME_CORNERS_TEAM_FIRST_HALF',
  TotalGameCornersTeamSecondHalf = 'TOTAL_GAME_CORNERS_TEAM_SECOND_HALF',
  TotalGameDouble = 'TOTAL_GAME_DOUBLE',
  TotalGameDoublesTeam = 'TOTAL_GAME_DOUBLES_TEAM',
  TotalGameFieldGoalsMade = 'TOTAL_GAME_FIELD_GOALS_MADE',
  TotalGameFoulsConceded = 'TOTAL_GAME_FOULS_CONCEDED',
  TotalGameFoulsConcededTeam = 'TOTAL_GAME_FOULS_CONCEDED_TEAM',
  TotalGameHits = 'TOTAL_GAME_HITS',
  TotalGameHitsEighthInning = 'TOTAL_GAME_HITS_EIGHTH_INNING',
  TotalGameHitsFifthInning = 'TOTAL_GAME_HITS_FIFTH_INNING',
  TotalGameHitsFirstHalf = 'TOTAL_GAME_HITS_FIRST_HALF',
  TotalGameHitsFirstInning = 'TOTAL_GAME_HITS_FIRST_INNING',
  TotalGameHitsFourthInning = 'TOTAL_GAME_HITS_FOURTH_INNING',
  TotalGameHitsNinthInning = 'TOTAL_GAME_HITS_NINTH_INNING',
  TotalGameHitsSecondHalf = 'TOTAL_GAME_HITS_SECOND_HALF',
  TotalGameHitsSecondInning = 'TOTAL_GAME_HITS_SECOND_INNING',
  TotalGameHitsSeventhInning = 'TOTAL_GAME_HITS_SEVENTH_INNING',
  TotalGameHitsSixthInning = 'TOTAL_GAME_HITS_SIXTH_INNING',
  TotalGameHitsTenthInning = 'TOTAL_GAME_HITS_TENTH_INNING',
  TotalGameHitsThirdInning = 'TOTAL_GAME_HITS_THIRD_INNING',
  TotalGameHitTeam = 'TOTAL_GAME_HIT_TEAM',
  TotalGameHomeRuns = 'TOTAL_GAME_HOME_RUNS',
  TotalGameHomeRunTeam = 'TOTAL_GAME_HOME_RUN_TEAM',
  TotalGameOffsides = 'TOTAL_GAME_OFFSIDES',
  TotalGameOffsidesFirstHalf = 'TOTAL_GAME_OFFSIDES_FIRST_HALF',
  TotalGameOffsidesSecondHalf = 'TOTAL_GAME_OFFSIDES_SECOND_HALF',
  TotalGameOffsidesSpread = 'TOTAL_GAME_OFFSIDES_SPREAD',
  TotalGameOffsidesTeam = 'TOTAL_GAME_OFFSIDES_TEAM',
  TotalGamePoints = 'TOTAL_GAME_POINTS',
  TotalGamePoints_3Way = 'TOTAL_GAME_POINTS_3_WAY',
  TotalGamePointsBandMulti = 'TOTAL_GAME_POINTS_BAND_MULTI',
  TotalGamePointsEighthInning = 'TOTAL_GAME_POINTS_EIGHTH_INNING',
  TotalGamePointsFifthInning = 'TOTAL_GAME_POINTS_FIFTH_INNING',
  TotalGamePointsFirstHalf = 'TOTAL_GAME_POINTS_FIRST_HALF',
  TotalGamePointsFirstInning = 'TOTAL_GAME_POINTS_FIRST_INNING',
  TotalGamePointsFirstQuarter = 'TOTAL_GAME_POINTS_FIRST_QUARTER',
  TotalGamePointsFourthInning = 'TOTAL_GAME_POINTS_FOURTH_INNING',
  TotalGamePointsFourthQuarter = 'TOTAL_GAME_POINTS_FOURTH_QUARTER',
  TotalGamePointsNinthInning = 'TOTAL_GAME_POINTS_NINTH_INNING',
  TotalGamePointsNoOt = 'TOTAL_GAME_POINTS_NO_OT',
  TotalGamePointsSecondHalf = 'TOTAL_GAME_POINTS_SECOND_HALF',
  TotalGamePointsSecondHalfNoOt = 'TOTAL_GAME_POINTS_SECOND_HALF_NO_OT',
  TotalGamePointsSecondInning = 'TOTAL_GAME_POINTS_SECOND_INNING',
  TotalGamePointsSecondQuarter = 'TOTAL_GAME_POINTS_SECOND_QUARTER',
  TotalGamePointsSeventhInning = 'TOTAL_GAME_POINTS_SEVENTH_INNING',
  TotalGamePointsSixthInning = 'TOTAL_GAME_POINTS_SIXTH_INNING',
  TotalGamePointsTeam = 'TOTAL_GAME_POINTS_TEAM',
  TotalGamePointsTeamEighthInning = 'TOTAL_GAME_POINTS_TEAM_EIGHTH_INNING',
  TotalGamePointsTeamFifthInning = 'TOTAL_GAME_POINTS_TEAM_FIFTH_INNING',
  TotalGamePointsTeamFirstHalf = 'TOTAL_GAME_POINTS_TEAM_FIRST_HALF',
  TotalGamePointsTeamFirstInning = 'TOTAL_GAME_POINTS_TEAM_FIRST_INNING',
  TotalGamePointsTeamFirstQuarter = 'TOTAL_GAME_POINTS_TEAM_FIRST_QUARTER',
  TotalGamePointsTeamFirstQuarterExact = 'TOTAL_GAME_POINTS_TEAM_FIRST_QUARTER_EXACT',
  TotalGamePointsTeamFourthInning = 'TOTAL_GAME_POINTS_TEAM_FOURTH_INNING',
  TotalGamePointsTeamFourthQuarter = 'TOTAL_GAME_POINTS_TEAM_FOURTH_QUARTER',
  TotalGamePointsTeamFourthQuarterExact = 'TOTAL_GAME_POINTS_TEAM_FOURTH_QUARTER_EXACT',
  TotalGamePointsTeamNinthInning = 'TOTAL_GAME_POINTS_TEAM_NINTH_INNING',
  TotalGamePointsTeamNoOt = 'TOTAL_GAME_POINTS_TEAM_NO_OT',
  TotalGamePointsTeamSecondHalf = 'TOTAL_GAME_POINTS_TEAM_SECOND_HALF',
  TotalGamePointsTeamSecondHalfNoOt = 'TOTAL_GAME_POINTS_TEAM_SECOND_HALF_NO_OT',
  TotalGamePointsTeamSecondInning = 'TOTAL_GAME_POINTS_TEAM_SECOND_INNING',
  TotalGamePointsTeamSecondQuarter = 'TOTAL_GAME_POINTS_TEAM_SECOND_QUARTER',
  TotalGamePointsTeamSecondQuarterExact = 'TOTAL_GAME_POINTS_TEAM_SECOND_QUARTER_EXACT',
  TotalGamePointsTeamSeventhInning = 'TOTAL_GAME_POINTS_TEAM_SEVENTH_INNING',
  TotalGamePointsTeamSixthInning = 'TOTAL_GAME_POINTS_TEAM_SIXTH_INNING',
  TotalGamePointsTeamTenthInning = 'TOTAL_GAME_POINTS_TEAM_TENTH_INNING',
  TotalGamePointsTeamThirdInning = 'TOTAL_GAME_POINTS_TEAM_THIRD_INNING',
  TotalGamePointsTeamThirdQuarter = 'TOTAL_GAME_POINTS_TEAM_THIRD_QUARTER',
  TotalGamePointsTeamThirdQuarterExact = 'TOTAL_GAME_POINTS_TEAM_THIRD_QUARTER_EXACT',
  TotalGamePointsTenthInning = 'TOTAL_GAME_POINTS_TENTH_INNING',
  TotalGamePointsThirdInning = 'TOTAL_GAME_POINTS_THIRD_INNING',
  TotalGamePointsThirdQuarter = 'TOTAL_GAME_POINTS_THIRD_QUARTER',
  TotalGamePowerPlayGoals = 'TOTAL_GAME_POWER_PLAY_GOALS',
  TotalGamePowerPlayGoalsTeam = 'TOTAL_GAME_POWER_PLAY_GOALS_TEAM',
  TotalGameRbIs = 'TOTAL_GAME_RB_IS',
  TotalGameReboundsTeam = 'TOTAL_GAME_REBOUNDS_TEAM',
  TotalGameSacks = 'TOTAL_GAME_SACKS',
  TotalGameShortHandedGoals = 'TOTAL_GAME_SHORT_HANDED_GOALS',
  TotalGameShots = 'TOTAL_GAME_SHOTS',
  TotalGameShotsOnGoal = 'TOTAL_GAME_SHOTS_ON_GOAL',
  TotalGameShotsOnGoalFirstHalf = 'TOTAL_GAME_SHOTS_ON_GOAL_FIRST_HALF',
  TotalGameShotsOnGoalSecondHalfNoOt = 'TOTAL_GAME_SHOTS_ON_GOAL_SECOND_HALF_NO_OT',
  TotalGameShotsOnGoalSpread = 'TOTAL_GAME_SHOTS_ON_GOAL_SPREAD',
  TotalGameShotsOnGoalTeam = 'TOTAL_GAME_SHOTS_ON_GOAL_TEAM',
  TotalGameShotsSavedTeam = 'TOTAL_GAME_SHOTS_SAVED_TEAM',
  TotalGameShotsTeam = 'TOTAL_GAME_SHOTS_TEAM',
  TotalGameSingle = 'TOTAL_GAME_SINGLE',
  TotalGameSinglesTeam = 'TOTAL_GAME_SINGLES_TEAM',
  TotalGameStealsTeam = 'TOTAL_GAME_STEALS_TEAM',
  TotalGameStrikeouts = 'TOTAL_GAME_STRIKEOUTS',
  TotalGameStrikeoutsTeam = 'TOTAL_GAME_STRIKEOUTS_TEAM',
  TotalGameThreesTeam = 'TOTAL_GAME_THREES_TEAM',
  TotalGameTouchdowns = 'TOTAL_GAME_TOUCHDOWNS',
  TotalGameTouchdownsFirstHalf = 'TOTAL_GAME_TOUCHDOWNS_FIRST_HALF',
  TotalGameTouchdownsFirstQuarter = 'TOTAL_GAME_TOUCHDOWNS_FIRST_QUARTER',
  TotalGameTouchdownsFourthQuarter = 'TOTAL_GAME_TOUCHDOWNS_FOURTH_QUARTER',
  TotalGameTouchdownsNoOt = 'TOTAL_GAME_TOUCHDOWNS_NO_OT',
  TotalGameTouchdownsSecondHalf = 'TOTAL_GAME_TOUCHDOWNS_SECOND_HALF',
  TotalGameTouchdownsSecondQuarter = 'TOTAL_GAME_TOUCHDOWNS_SECOND_QUARTER',
  TotalGameTouchdownsTeam = 'TOTAL_GAME_TOUCHDOWNS_TEAM',
  TotalGameTouchdownsTeamFirstHalf = 'TOTAL_GAME_TOUCHDOWNS_TEAM_FIRST_HALF',
  TotalGameTouchdownsTeamFirstQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_FIRST_QUARTER',
  TotalGameTouchdownsTeamFourthQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_FOURTH_QUARTER',
  TotalGameTouchdownsTeamSecondHalf = 'TOTAL_GAME_TOUCHDOWNS_TEAM_SECOND_HALF',
  TotalGameTouchdownsTeamSecondHalfNoOt = 'TOTAL_GAME_TOUCHDOWNS_TEAM_SECOND_HALF_NO_OT',
  TotalGameTouchdownsTeamSecondQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_SECOND_QUARTER',
  TotalGameTouchdownsTeamThirdQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_THIRD_QUARTER',
  TotalGameTouchdownsThirdQuarter = 'TOTAL_GAME_TOUCHDOWNS_THIRD_QUARTER',
  TotalGameTriple = 'TOTAL_GAME_TRIPLE',
  TotalGameTriplesTeam = 'TOTAL_GAME_TRIPLES_TEAM',
  TotalGameWalks = 'TOTAL_GAME_WALKS',
  TotalGameYellowCards = 'TOTAL_GAME_YELLOW_CARDS',
  TotalGameYellowCardsFirstHalf = 'TOTAL_GAME_YELLOW_CARDS_FIRST_HALF',
  TotalGameYellowCardsSecondHalf = 'TOTAL_GAME_YELLOW_CARDS_SECOND_HALF',
  TotalGameYellowCardsTeam = 'TOTAL_GAME_YELLOW_CARDS_TEAM',
  TotalGameYellowCardsTeamFirstHalf = 'TOTAL_GAME_YELLOW_CARDS_TEAM_FIRST_HALF',
  TotalGameYellowCardsTeamSecondHalf = 'TOTAL_GAME_YELLOW_CARDS_TEAM_SECOND_HALF',
  ToMakePlayoffs = 'TO_MAKE_PLAYOFFS',
  WinningMarginBandsMulti = 'WINNING_MARGIN_BANDS_MULTI',
  WinMarginMulti = 'WIN_MARGIN_MULTI',
  WireToWireMulti = 'WIRE_TO_WIRE_MULTI'
}

export enum BetMarketTypeEnumTypeTwo {
  DoubleResultMulti = 'DOUBLE_RESULT_MULTI',
  FirstFieldGoalTeam = 'FIRST_FIELD_GOAL_TEAM',
  FirstFieldGoalTeamExactMulti = 'FIRST_FIELD_GOAL_TEAM_EXACT_MULTI',
  FirstFieldGoalType = 'FIRST_FIELD_GOAL_TYPE',
  GameEmptyNetGoal = 'GAME_EMPTY_NET_GOAL',
  GameGoalScoredBothHalves = 'GAME_GOAL_SCORED_BOTH_HALVES',
  GameGoalScoredBothTeams = 'GAME_GOAL_SCORED_BOTH_TEAMS',
  GameGoalScoredBothTeams_3Way = 'GAME_GOAL_SCORED_BOTH_TEAMS_3_WAY',
  GameGoalScoredBothTeamsBothHalves = 'GAME_GOAL_SCORED_BOTH_TEAMS_BOTH_HALVES',
  GameGoalScoredBothTeamsFirstHalf = 'GAME_GOAL_SCORED_BOTH_TEAMS_FIRST_HALF',
  GameGoalScoredBothTeamsNoDraw = 'GAME_GOAL_SCORED_BOTH_TEAMS_NO_DRAW',
  GameGoalScoredBothTeamsSecondHalf = 'GAME_GOAL_SCORED_BOTH_TEAMS_SECOND_HALF',
  GameGoalScoredFirstHalf = 'GAME_GOAL_SCORED_FIRST_HALF',
  GameGoalScoredSecondHalf = 'GAME_GOAL_SCORED_SECOND_HALF',
  GameGrandSlam = 'GAME_GRAND_SLAM',
  GameOvertime = 'GAME_OVERTIME',
  GameOwnGoal = 'GAME_OWN_GOAL',
  GamePenaltyAwarded = 'GAME_PENALTY_AWARDED',
  GameRedCardGiven = 'GAME_RED_CARD_GIVEN',
  MoneyLine = 'MONEY_LINE',
  MoneyLine_3Way = 'MONEY_LINE_3_WAY',
  MoneyLineEighthInning = 'MONEY_LINE_EIGHTH_INNING',
  MoneyLineEighthInning_3Way = 'MONEY_LINE_EIGHTH_INNING_3_WAY',
  MoneyLineFifthInning = 'MONEY_LINE_FIFTH_INNING',
  MoneyLineFifthInning_3Way = 'MONEY_LINE_FIFTH_INNING_3_WAY',
  MoneyLineFirstHalf = 'MONEY_LINE_FIRST_HALF',
  MoneyLineFirstHalf_3Way = 'MONEY_LINE_FIRST_HALF_3_WAY',
  MoneyLineFirstInning = 'MONEY_LINE_FIRST_INNING',
  MoneyLineFirstInning_3Way = 'MONEY_LINE_FIRST_INNING_3_WAY',
  MoneyLineFirstQuarter = 'MONEY_LINE_FIRST_QUARTER',
  MoneyLineFirstQuarter_3Way = 'MONEY_LINE_FIRST_QUARTER_3_WAY',
  MoneyLineFourthInning = 'MONEY_LINE_FOURTH_INNING',
  MoneyLineFourthInning_3Way = 'MONEY_LINE_FOURTH_INNING_3_WAY',
  MoneyLineFourthQuarter = 'MONEY_LINE_FOURTH_QUARTER',
  MoneyLineFourthQuarter_3Way = 'MONEY_LINE_FOURTH_QUARTER_3_WAY',
  MoneyLineNinthInning = 'MONEY_LINE_NINTH_INNING',
  MoneyLineNinthInning_3Way = 'MONEY_LINE_NINTH_INNING_3_WAY',
  MoneyLineNoOt = 'MONEY_LINE_NO_OT',
  MoneyLineNoOt_3Way = 'MONEY_LINE_NO_OT_3_WAY',
  MoneyLineSecondHalf = 'MONEY_LINE_SECOND_HALF',
  MoneyLineSecondHalf_3Way = 'MONEY_LINE_SECOND_HALF_3_WAY',
  MoneyLineSecondHalfNoOt = 'MONEY_LINE_SECOND_HALF_NO_OT',
  MoneyLineSecondHalfNoOt_3Way = 'MONEY_LINE_SECOND_HALF_NO_OT_3_WAY',
  MoneyLineSecondInning = 'MONEY_LINE_SECOND_INNING',
  MoneyLineSecondInning_3Way = 'MONEY_LINE_SECOND_INNING_3_WAY',
  MoneyLineSecondQuarter = 'MONEY_LINE_SECOND_QUARTER',
  MoneyLineSecondQuarter_3Way = 'MONEY_LINE_SECOND_QUARTER_3_WAY',
  MoneyLineSeventhInning = 'MONEY_LINE_SEVENTH_INNING',
  MoneyLineSeventhInning_3Way = 'MONEY_LINE_SEVENTH_INNING_3_WAY',
  MoneyLineSixthInning = 'MONEY_LINE_SIXTH_INNING',
  MoneyLineSixthInning_3Way = 'MONEY_LINE_SIXTH_INNING_3_WAY',
  MoneyLineTenthInning = 'MONEY_LINE_TENTH_INNING',
  MoneyLineTenthInning_3Way = 'MONEY_LINE_TENTH_INNING_3_WAY',
  MoneyLineThirdInning = 'MONEY_LINE_THIRD_INNING',
  MoneyLineThirdInning_3Way = 'MONEY_LINE_THIRD_INNING_3_WAY',
  MoneyLineThirdQuarter = 'MONEY_LINE_THIRD_QUARTER',
  MoneyLineThirdQuarter_3Way = 'MONEY_LINE_THIRD_QUARTER_3_WAY',
  MoneyLineToQualify = 'MONEY_LINE_TO_QUALIFY',
  PlayerFirstFieldGoalExactMulti = 'PLAYER_FIRST_FIELD_GOAL_EXACT_MULTI',
  PlayerFirstFieldGoalMulti = 'PLAYER_FIRST_FIELD_GOAL_MULTI',
  PlayerFirstFieldGoalTypeMulti = 'PLAYER_FIRST_FIELD_GOAL_TYPE_MULTI',
  PlayerPropAnyTimeTouchdown = 'PLAYER_PROP_ANY_TIME_TOUCHDOWN',
  PlayerPropAssists = 'PLAYER_PROP_ASSISTS',
  PlayerPropAssistsFirstQuarter = 'PLAYER_PROP_ASSISTS_FIRST_QUARTER',
  PlayerPropAssistsFourthQuarter = 'PLAYER_PROP_ASSISTS_FOURTH_QUARTER',
  PlayerPropAssistsSecondQuarter = 'PLAYER_PROP_ASSISTS_SECOND_QUARTER',
  PlayerPropAssistsThirdQuarter = 'PLAYER_PROP_ASSISTS_THIRD_QUARTER',
  PlayerPropBases = 'PLAYER_PROP_BASES',
  PlayerPropBattedStrikeouts = 'PLAYER_PROP_BATTED_STRIKEOUTS',
  PlayerPropBattedWalk = 'PLAYER_PROP_BATTED_WALK',
  PlayerPropBlockedShots = 'PLAYER_PROP_BLOCKED_SHOTS',
  PlayerPropBlocks = 'PLAYER_PROP_BLOCKS',
  PlayerPropCard = 'PLAYER_PROP_CARD',
  PlayerPropCaughtInterceptions = 'PLAYER_PROP_CAUGHT_INTERCEPTIONS',
  PlayerPropDouble = 'PLAYER_PROP_DOUBLE',
  PlayerPropDoubleDouble = 'PLAYER_PROP_DOUBLE_DOUBLE',
  PlayerPropExtraPointMade = 'PLAYER_PROP_EXTRA_POINT_MADE',
  PlayerPropFieldGoalsMade = 'PLAYER_PROP_FIELD_GOALS_MADE',
  PlayerPropFirstTouchdown = 'PLAYER_PROP_FIRST_TOUCHDOWN',
  PlayerPropGoalsAgainst = 'PLAYER_PROP_GOALS_AGAINST',
  PlayerPropGoalsScored = 'PLAYER_PROP_GOALS_SCORED',
  PlayerPropGrandSlam = 'PLAYER_PROP_GRAND_SLAM',
  PlayerPropHit = 'PLAYER_PROP_HIT',
  PlayerPropHomeRun = 'PLAYER_PROP_HOME_RUN',
  PlayerPropKickingPoints = 'PLAYER_PROP_KICKING_POINTS',
  PlayerPropLastTouchdown = 'PLAYER_PROP_LAST_TOUCHDOWN',
  PlayerPropLongestCompletion = 'PLAYER_PROP_LONGEST_COMPLETION',
  PlayerPropLongestReception = 'PLAYER_PROP_LONGEST_RECEPTION',
  PlayerPropLongestRush = 'PLAYER_PROP_LONGEST_RUSH',
  PlayerPropPasses = 'PLAYER_PROP_PASSES',
  PlayerPropPassingAttempts = 'PLAYER_PROP_PASSING_ATTEMPTS',
  PlayerPropPassingCompletions = 'PLAYER_PROP_PASSING_COMPLETIONS',
  PlayerPropPassingRushingYards = 'PLAYER_PROP_PASSING_RUSHING_YARDS',
  PlayerPropPassingTouchdowns = 'PLAYER_PROP_PASSING_TOUCHDOWNS',
  PlayerPropPassingYards = 'PLAYER_PROP_PASSING_YARDS',
  PlayerPropPoints = 'PLAYER_PROP_POINTS',
  PlayerPropPointsAssists = 'PLAYER_PROP_POINTS_ASSISTS',
  PlayerPropPointsAssistsRebounds = 'PLAYER_PROP_POINTS_ASSISTS_REBOUNDS',
  PlayerPropPointsBlocks = 'PLAYER_PROP_POINTS_BLOCKS',
  PlayerPropPointsFirstQuarter = 'PLAYER_PROP_POINTS_FIRST_QUARTER',
  PlayerPropPointsFourthQuarter = 'PLAYER_PROP_POINTS_FOURTH_QUARTER',
  PlayerPropPointsRebounds = 'PLAYER_PROP_POINTS_REBOUNDS',
  PlayerPropPointsSecondQuarter = 'PLAYER_PROP_POINTS_SECOND_QUARTER',
  PlayerPropPointsThirdQuarter = 'PLAYER_PROP_POINTS_THIRD_QUARTER',
  PlayerPropPowerPlayPoints = 'PLAYER_PROP_POWER_PLAY_POINTS',
  PlayerPropRbi = 'PLAYER_PROP_RBI',
  PlayerPropRebounds = 'PLAYER_PROP_REBOUNDS',
  PlayerPropReboundsAssists = 'PLAYER_PROP_REBOUNDS_ASSISTS',
  PlayerPropReboundsFirstQuarter = 'PLAYER_PROP_REBOUNDS_FIRST_QUARTER',
  PlayerPropReboundsFourthQuarter = 'PLAYER_PROP_REBOUNDS_FOURTH_QUARTER',
  PlayerPropReboundsSecondQuarter = 'PLAYER_PROP_REBOUNDS_SECOND_QUARTER',
  PlayerPropReboundsThirdQuarter = 'PLAYER_PROP_REBOUNDS_THIRD_QUARTER',
  PlayerPropReceivingYards = 'PLAYER_PROP_RECEIVING_YARDS',
  PlayerPropRecordedWin = 'PLAYER_PROP_RECORDED_WIN',
  PlayerPropRedCard = 'PLAYER_PROP_RED_CARD',
  PlayerPropRun = 'PLAYER_PROP_RUN',
  PlayerPropRunHit = 'PLAYER_PROP_RUN_HIT',
  PlayerPropRunHitRbi = 'PLAYER_PROP_RUN_HIT_RBI',
  PlayerPropRunRbi = 'PLAYER_PROP_RUN_RBI',
  PlayerPropRushingAttempts = 'PLAYER_PROP_RUSHING_ATTEMPTS',
  PlayerPropRushingYards = 'PLAYER_PROP_RUSHING_YARDS',
  PlayerPropSacks = 'PLAYER_PROP_SACKS',
  PlayerPropScoreAndAssist = 'PLAYER_PROP_SCORE_AND_ASSIST',
  PlayerPropScoreOrAssist = 'PLAYER_PROP_SCORE_OR_ASSIST',
  PlayerPropShots = 'PLAYER_PROP_SHOTS',
  PlayerPropShotsEachHalf = 'PLAYER_PROP_SHOTS_EACH_HALF',
  PlayerPropShotsFirstHalf = 'PLAYER_PROP_SHOTS_FIRST_HALF',
  PlayerPropShotsOnGoal = 'PLAYER_PROP_SHOTS_ON_GOAL',
  PlayerPropShotsOnGoalEachHalf = 'PLAYER_PROP_SHOTS_ON_GOAL_EACH_HALF',
  PlayerPropShotsOnGoalFirstHalf = 'PLAYER_PROP_SHOTS_ON_GOAL_FIRST_HALF',
  PlayerPropShotsOnGoalSecondHalf = 'PLAYER_PROP_SHOTS_ON_GOAL_SECOND_HALF',
  PlayerPropShotsSaved = 'PLAYER_PROP_SHOTS_SAVED',
  PlayerPropShotsSavedNoOt = 'PLAYER_PROP_SHOTS_SAVED_NO_OT',
  PlayerPropShotsSecondHalf = 'PLAYER_PROP_SHOTS_SECOND_HALF',
  PlayerPropShutout = 'PLAYER_PROP_SHUTOUT',
  PlayerPropSingle = 'PLAYER_PROP_SINGLE',
  PlayerPropSoloTackles = 'PLAYER_PROP_SOLO_TACKLES',
  PlayerPropSteals = 'PLAYER_PROP_STEALS',
  PlayerPropStealsBlocks = 'PLAYER_PROP_STEALS_BLOCKS',
  PlayerPropStolenBase = 'PLAYER_PROP_STOLEN_BASE',
  PlayerPropTacklesAssists = 'PLAYER_PROP_TACKLES_ASSISTS',
  PlayerPropTackleSoloAndAssist = 'PLAYER_PROP_TACKLE_SOLO_AND_ASSIST',
  PlayerPropThreePointer = 'PLAYER_PROP_THREE_POINTER',
  PlayerPropThrownEarnedRun = 'PLAYER_PROP_THROWN_EARNED_RUN',
  PlayerPropThrownHits = 'PLAYER_PROP_THROWN_HITS',
  PlayerPropThrownInterceptions = 'PLAYER_PROP_THROWN_INTERCEPTIONS',
  PlayerPropThrownOuts = 'PLAYER_PROP_THROWN_OUTS',
  PlayerPropThrownStrikeouts = 'PLAYER_PROP_THROWN_STRIKEOUTS',
  PlayerPropThrownWalk = 'PLAYER_PROP_THROWN_WALK',
  PlayerPropTotalReceptions = 'PLAYER_PROP_TOTAL_RECEPTIONS',
  PlayerPropTotalScrimmageYards = 'PLAYER_PROP_TOTAL_SCRIMMAGE_YARDS',
  PlayerPropTriple = 'PLAYER_PROP_TRIPLE',
  PlayerPropTripleDouble = 'PLAYER_PROP_TRIPLE_DOUBLE',
  PlayerPropTurnovers = 'PLAYER_PROP_TURNOVERS',
  PlayerPropTurnoversSteals = 'PLAYER_PROP_TURNOVERS_STEALS',
  PlayerPropTurnoversStealsBlocks = 'PLAYER_PROP_TURNOVERS_STEALS_BLOCKS',
  PlayerPropYellowCard = 'PLAYER_PROP_YELLOW_CARD',
  RaceToPoints = 'RACE_TO_POINTS',
  RaceToPoints_3Way = 'RACE_TO_POINTS_3_WAY',
  RaceToPointsFirstHalf = 'RACE_TO_POINTS_FIRST_HALF',
  RaceToPointsFirstHalf_3Way = 'RACE_TO_POINTS_FIRST_HALF_3_WAY',
  RaceToPointsFirstQuarter = 'RACE_TO_POINTS_FIRST_QUARTER',
  RaceToPointsFirstQuarter_3Way = 'RACE_TO_POINTS_FIRST_QUARTER_3_WAY',
  RaceToPointsFourthQuarter = 'RACE_TO_POINTS_FOURTH_QUARTER',
  RaceToPointsFourthQuarter_3Way = 'RACE_TO_POINTS_FOURTH_QUARTER_3_WAY',
  RaceToPointsSecondHalf = 'RACE_TO_POINTS_SECOND_HALF',
  RaceToPointsSecondHalf_3Way = 'RACE_TO_POINTS_SECOND_HALF_3_WAY',
  RaceToPointsSecondQuarter = 'RACE_TO_POINTS_SECOND_QUARTER',
  RaceToPointsSecondQuarter_3Way = 'RACE_TO_POINTS_SECOND_QUARTER_3_WAY',
  RaceToPointsThirdQuarter = 'RACE_TO_POINTS_THIRD_QUARTER',
  RaceToPointsThirdQuarter_3Way = 'RACE_TO_POINTS_THIRD_QUARTER_3_WAY',
  Spread = 'SPREAD',
  Spread_3Way = 'SPREAD_3_WAY',
  SpreadCards = 'SPREAD_CARDS',
  SpreadCards_3Way = 'SPREAD_CARDS_3_WAY',
  SpreadCorners = 'SPREAD_CORNERS',
  SpreadEighthInning = 'SPREAD_EIGHTH_INNING',
  SpreadFifthInning = 'SPREAD_FIFTH_INNING',
  SpreadFirstHalf = 'SPREAD_FIRST_HALF',
  SpreadFirstHalf_3Way = 'SPREAD_FIRST_HALF_3_WAY',
  SpreadFirstInning = 'SPREAD_FIRST_INNING',
  SpreadFirstQuarter = 'SPREAD_FIRST_QUARTER',
  SpreadFirstQuarter_3Way = 'SPREAD_FIRST_QUARTER_3_WAY',
  SpreadFourthInning = 'SPREAD_FOURTH_INNING',
  SpreadFourthQuarter = 'SPREAD_FOURTH_QUARTER',
  SpreadFourthQuarter_3Way = 'SPREAD_FOURTH_QUARTER_3_WAY',
  SpreadNinthInning = 'SPREAD_NINTH_INNING',
  SpreadNoOt = 'SPREAD_NO_OT',
  SpreadNoOt_3Way = 'SPREAD_NO_OT_3_WAY',
  SpreadSecondHalf = 'SPREAD_SECOND_HALF',
  SpreadSecondHalfNoOt = 'SPREAD_SECOND_HALF_NO_OT',
  SpreadSecondHalfNoOt_3Way = 'SPREAD_SECOND_HALF_NO_OT_3_WAY',
  SpreadSecondInning = 'SPREAD_SECOND_INNING',
  SpreadSecondQuarter = 'SPREAD_SECOND_QUARTER',
  SpreadSecondQuarter_3Way = 'SPREAD_SECOND_QUARTER_3_WAY',
  SpreadSeventhInning = 'SPREAD_SEVENTH_INNING',
  SpreadSixthInning = 'SPREAD_SIXTH_INNING',
  SpreadTenthInning = 'SPREAD_TENTH_INNING',
  SpreadThirdInning = 'SPREAD_THIRD_INNING',
  SpreadThirdQuarter = 'SPREAD_THIRD_QUARTER',
  SpreadThirdQuarter_3Way = 'SPREAD_THIRD_QUARTER_3_WAY',
  TeamAwardedPenalty = 'TEAM_AWARDED_PENALTY',
  TeamMostCards = 'TEAM_MOST_CARDS',
  TeamMostCards_3Way = 'TEAM_MOST_CARDS_3_WAY',
  TeamMostCardsSpread = 'TEAM_MOST_CARDS_SPREAD',
  TeamMostCardsSpread_3Way = 'TEAM_MOST_CARDS_SPREAD_3_WAY',
  TeamMostCorners_3Way = 'TEAM_MOST_CORNERS_3_WAY',
  TeamMostCornersSpread_3Way = 'TEAM_MOST_CORNERS_SPREAD_3_WAY',
  TeamMostOffsides_3Way = 'TEAM_MOST_OFFSIDES_3_WAY',
  TeamScoreBothHalves = 'TEAM_SCORE_BOTH_HALVES',
  TeamScoreFirst = 'TEAM_SCORE_FIRST',
  TeamScoreFirst_3Way = 'TEAM_SCORE_FIRST_3_WAY',
  TeamScoreFirstFirstHalf_3Way = 'TEAM_SCORE_FIRST_FIRST_HALF_3_WAY',
  TeamScoreFirstSecondHalf = 'TEAM_SCORE_FIRST_SECOND_HALF',
  TeamScoreFirstSecondHalf_3Way = 'TEAM_SCORE_FIRST_SECOND_HALF_3_WAY',
  TeamScoreFromPenalty = 'TEAM_SCORE_FROM_PENALTY',
  TeamScoreLast = 'TEAM_SCORE_LAST',
  TeamScoreLast_3Way = 'TEAM_SCORE_LAST_3_WAY',
  TeamScoreLastFirstHalf_3Way = 'TEAM_SCORE_LAST_FIRST_HALF_3_WAY',
  TeamScoreLastSecondHalf_3Way = 'TEAM_SCORE_LAST_SECOND_HALF_3_WAY',
  TeamWinningAtHTorFt = 'TEAM_WINNING_AT_H_TOR_FT',
  TeamWinBothHalves = 'TEAM_WIN_BOTH_HALVES',
  TeamWinBothHalves_3Way = 'TEAM_WIN_BOTH_HALVES_3_WAY',
  TeamWinCleanSheet = 'TEAM_WIN_CLEAN_SHEET',
  TeamWinCleanSheetFirstHalf = 'TEAM_WIN_CLEAN_SHEET_FIRST_HALF',
  TeamWinCleanSheetSecondHalf = 'TEAM_WIN_CLEAN_SHEET_SECOND_HALF',
  TeamWinEitherHalves = 'TEAM_WIN_EITHER_HALVES',
  TeamWinEitherHalves_3Way = 'TEAM_WIN_EITHER_HALVES_3_WAY',
  TeamWinWithShutout = 'TEAM_WIN_WITH_SHUTOUT',
  TeamWinWithShutoutFirstHalfNoOt = 'TEAM_WIN_WITH_SHUTOUT_FIRST_HALF_NO_OT',
  TeamWinWithShutoutNoOt = 'TEAM_WIN_WITH_SHUTOUT_NO_OT',
  TeamWinWithShutoutSecondHalfNoOt = 'TEAM_WIN_WITH_SHUTOUT_SECOND_HALF_NO_OT',
  TotalGameAssistsTeam = 'TOTAL_GAME_ASSISTS_TEAM',
  TotalGameBases = 'TOTAL_GAME_BASES',
  TotalGameBasesStolen = 'TOTAL_GAME_BASES_STOLEN',
  TotalGameBasesStolenTeam = 'TOTAL_GAME_BASES_STOLEN_TEAM',
  TotalGameBasesTeam = 'TOTAL_GAME_BASES_TEAM',
  TotalGameBlocksTeam = 'TOTAL_GAME_BLOCKS_TEAM',
  TotalGameCards = 'TOTAL_GAME_CARDS',
  TotalGameCardsFirstHalf = 'TOTAL_GAME_CARDS_FIRST_HALF',
  TotalGameCardsSecondHalfNoOt = 'TOTAL_GAME_CARDS_SECOND_HALF_NO_OT',
  TotalGameCardsTeam = 'TOTAL_GAME_CARDS_TEAM',
  TotalGameCorners = 'TOTAL_GAME_CORNERS',
  TotalGameCornersFirstHalf = 'TOTAL_GAME_CORNERS_FIRST_HALF',
  TotalGameCornersSecondHalf = 'TOTAL_GAME_CORNERS_SECOND_HALF',
  TotalGameCornersTeam = 'TOTAL_GAME_CORNERS_TEAM',
  TotalGameCornersTeamFirstHalf = 'TOTAL_GAME_CORNERS_TEAM_FIRST_HALF',
  TotalGameCornersTeamSecondHalf = 'TOTAL_GAME_CORNERS_TEAM_SECOND_HALF',
  TotalGameDouble = 'TOTAL_GAME_DOUBLE',
  TotalGameDoublesTeam = 'TOTAL_GAME_DOUBLES_TEAM',
  TotalGameFieldGoalsMade = 'TOTAL_GAME_FIELD_GOALS_MADE',
  TotalGameFoulsConceded = 'TOTAL_GAME_FOULS_CONCEDED',
  TotalGameFoulsConcededTeam = 'TOTAL_GAME_FOULS_CONCEDED_TEAM',
  TotalGameHits = 'TOTAL_GAME_HITS',
  TotalGameHitsEighthInning = 'TOTAL_GAME_HITS_EIGHTH_INNING',
  TotalGameHitsFifthInning = 'TOTAL_GAME_HITS_FIFTH_INNING',
  TotalGameHitsFirstHalf = 'TOTAL_GAME_HITS_FIRST_HALF',
  TotalGameHitsFirstInning = 'TOTAL_GAME_HITS_FIRST_INNING',
  TotalGameHitsFourthInning = 'TOTAL_GAME_HITS_FOURTH_INNING',
  TotalGameHitsNinthInning = 'TOTAL_GAME_HITS_NINTH_INNING',
  TotalGameHitsSecondHalf = 'TOTAL_GAME_HITS_SECOND_HALF',
  TotalGameHitsSecondInning = 'TOTAL_GAME_HITS_SECOND_INNING',
  TotalGameHitsSeventhInning = 'TOTAL_GAME_HITS_SEVENTH_INNING',
  TotalGameHitsSixthInning = 'TOTAL_GAME_HITS_SIXTH_INNING',
  TotalGameHitsTenthInning = 'TOTAL_GAME_HITS_TENTH_INNING',
  TotalGameHitsThirdInning = 'TOTAL_GAME_HITS_THIRD_INNING',
  TotalGameHitTeam = 'TOTAL_GAME_HIT_TEAM',
  TotalGameHomeRuns = 'TOTAL_GAME_HOME_RUNS',
  TotalGameHomeRunTeam = 'TOTAL_GAME_HOME_RUN_TEAM',
  TotalGameOffsides = 'TOTAL_GAME_OFFSIDES',
  TotalGameOffsidesFirstHalf = 'TOTAL_GAME_OFFSIDES_FIRST_HALF',
  TotalGameOffsidesSecondHalf = 'TOTAL_GAME_OFFSIDES_SECOND_HALF',
  TotalGameOffsidesSpread = 'TOTAL_GAME_OFFSIDES_SPREAD',
  TotalGameOffsidesTeam = 'TOTAL_GAME_OFFSIDES_TEAM',
  TotalGamePoints = 'TOTAL_GAME_POINTS',
  TotalGamePoints_3Way = 'TOTAL_GAME_POINTS_3_WAY',
  TotalGamePointsBandMulti = 'TOTAL_GAME_POINTS_BAND_MULTI',
  TotalGamePointsEighthInning = 'TOTAL_GAME_POINTS_EIGHTH_INNING',
  TotalGamePointsFifthInning = 'TOTAL_GAME_POINTS_FIFTH_INNING',
  TotalGamePointsFirstHalf = 'TOTAL_GAME_POINTS_FIRST_HALF',
  TotalGamePointsFirstInning = 'TOTAL_GAME_POINTS_FIRST_INNING',
  TotalGamePointsFirstQuarter = 'TOTAL_GAME_POINTS_FIRST_QUARTER',
  TotalGamePointsFourthInning = 'TOTAL_GAME_POINTS_FOURTH_INNING',
  TotalGamePointsFourthQuarter = 'TOTAL_GAME_POINTS_FOURTH_QUARTER',
  TotalGamePointsNinthInning = 'TOTAL_GAME_POINTS_NINTH_INNING',
  TotalGamePointsNoOt = 'TOTAL_GAME_POINTS_NO_OT',
  TotalGamePointsSecondHalf = 'TOTAL_GAME_POINTS_SECOND_HALF',
  TotalGamePointsSecondHalfNoOt = 'TOTAL_GAME_POINTS_SECOND_HALF_NO_OT',
  TotalGamePointsSecondInning = 'TOTAL_GAME_POINTS_SECOND_INNING',
  TotalGamePointsSecondQuarter = 'TOTAL_GAME_POINTS_SECOND_QUARTER',
  TotalGamePointsSeventhInning = 'TOTAL_GAME_POINTS_SEVENTH_INNING',
  TotalGamePointsSixthInning = 'TOTAL_GAME_POINTS_SIXTH_INNING',
  TotalGamePointsTeam = 'TOTAL_GAME_POINTS_TEAM',
  TotalGamePointsTeamEighthInning = 'TOTAL_GAME_POINTS_TEAM_EIGHTH_INNING',
  TotalGamePointsTeamFifthInning = 'TOTAL_GAME_POINTS_TEAM_FIFTH_INNING',
  TotalGamePointsTeamFirstHalf = 'TOTAL_GAME_POINTS_TEAM_FIRST_HALF',
  TotalGamePointsTeamFirstInning = 'TOTAL_GAME_POINTS_TEAM_FIRST_INNING',
  TotalGamePointsTeamFirstQuarter = 'TOTAL_GAME_POINTS_TEAM_FIRST_QUARTER',
  TotalGamePointsTeamFirstQuarterExact = 'TOTAL_GAME_POINTS_TEAM_FIRST_QUARTER_EXACT',
  TotalGamePointsTeamFourthInning = 'TOTAL_GAME_POINTS_TEAM_FOURTH_INNING',
  TotalGamePointsTeamFourthQuarter = 'TOTAL_GAME_POINTS_TEAM_FOURTH_QUARTER',
  TotalGamePointsTeamFourthQuarterExact = 'TOTAL_GAME_POINTS_TEAM_FOURTH_QUARTER_EXACT',
  TotalGamePointsTeamNinthInning = 'TOTAL_GAME_POINTS_TEAM_NINTH_INNING',
  TotalGamePointsTeamNoOt = 'TOTAL_GAME_POINTS_TEAM_NO_OT',
  TotalGamePointsTeamSecondHalf = 'TOTAL_GAME_POINTS_TEAM_SECOND_HALF',
  TotalGamePointsTeamSecondHalfNoOt = 'TOTAL_GAME_POINTS_TEAM_SECOND_HALF_NO_OT',
  TotalGamePointsTeamSecondInning = 'TOTAL_GAME_POINTS_TEAM_SECOND_INNING',
  TotalGamePointsTeamSecondQuarter = 'TOTAL_GAME_POINTS_TEAM_SECOND_QUARTER',
  TotalGamePointsTeamSecondQuarterExact = 'TOTAL_GAME_POINTS_TEAM_SECOND_QUARTER_EXACT',
  TotalGamePointsTeamSeventhInning = 'TOTAL_GAME_POINTS_TEAM_SEVENTH_INNING',
  TotalGamePointsTeamSixthInning = 'TOTAL_GAME_POINTS_TEAM_SIXTH_INNING',
  TotalGamePointsTeamTenthInning = 'TOTAL_GAME_POINTS_TEAM_TENTH_INNING',
  TotalGamePointsTeamThirdInning = 'TOTAL_GAME_POINTS_TEAM_THIRD_INNING',
  TotalGamePointsTeamThirdQuarter = 'TOTAL_GAME_POINTS_TEAM_THIRD_QUARTER',
  TotalGamePointsTeamThirdQuarterExact = 'TOTAL_GAME_POINTS_TEAM_THIRD_QUARTER_EXACT',
  TotalGamePointsTenthInning = 'TOTAL_GAME_POINTS_TENTH_INNING',
  TotalGamePointsThirdInning = 'TOTAL_GAME_POINTS_THIRD_INNING',
  TotalGamePointsThirdQuarter = 'TOTAL_GAME_POINTS_THIRD_QUARTER',
  TotalGamePowerPlayGoals = 'TOTAL_GAME_POWER_PLAY_GOALS',
  TotalGamePowerPlayGoalsTeam = 'TOTAL_GAME_POWER_PLAY_GOALS_TEAM',
  TotalGameRbIs = 'TOTAL_GAME_RB_IS',
  TotalGameReboundsTeam = 'TOTAL_GAME_REBOUNDS_TEAM',
  TotalGameSacks = 'TOTAL_GAME_SACKS',
  TotalGameShortHandedGoals = 'TOTAL_GAME_SHORT_HANDED_GOALS',
  TotalGameShots = 'TOTAL_GAME_SHOTS',
  TotalGameShotsOnGoal = 'TOTAL_GAME_SHOTS_ON_GOAL',
  TotalGameShotsOnGoalFirstHalf = 'TOTAL_GAME_SHOTS_ON_GOAL_FIRST_HALF',
  TotalGameShotsOnGoalSecondHalfNoOt = 'TOTAL_GAME_SHOTS_ON_GOAL_SECOND_HALF_NO_OT',
  TotalGameShotsOnGoalSpread = 'TOTAL_GAME_SHOTS_ON_GOAL_SPREAD',
  TotalGameShotsOnGoalTeam = 'TOTAL_GAME_SHOTS_ON_GOAL_TEAM',
  TotalGameShotsSavedTeam = 'TOTAL_GAME_SHOTS_SAVED_TEAM',
  TotalGameShotsTeam = 'TOTAL_GAME_SHOTS_TEAM',
  TotalGameSingle = 'TOTAL_GAME_SINGLE',
  TotalGameSinglesTeam = 'TOTAL_GAME_SINGLES_TEAM',
  TotalGameStealsTeam = 'TOTAL_GAME_STEALS_TEAM',
  TotalGameStrikeouts = 'TOTAL_GAME_STRIKEOUTS',
  TotalGameStrikeoutsTeam = 'TOTAL_GAME_STRIKEOUTS_TEAM',
  TotalGameThreesTeam = 'TOTAL_GAME_THREES_TEAM',
  TotalGameTouchdowns = 'TOTAL_GAME_TOUCHDOWNS',
  TotalGameTouchdownsFirstHalf = 'TOTAL_GAME_TOUCHDOWNS_FIRST_HALF',
  TotalGameTouchdownsFirstQuarter = 'TOTAL_GAME_TOUCHDOWNS_FIRST_QUARTER',
  TotalGameTouchdownsFourthQuarter = 'TOTAL_GAME_TOUCHDOWNS_FOURTH_QUARTER',
  TotalGameTouchdownsNoOt = 'TOTAL_GAME_TOUCHDOWNS_NO_OT',
  TotalGameTouchdownsSecondHalf = 'TOTAL_GAME_TOUCHDOWNS_SECOND_HALF',
  TotalGameTouchdownsSecondQuarter = 'TOTAL_GAME_TOUCHDOWNS_SECOND_QUARTER',
  TotalGameTouchdownsTeam = 'TOTAL_GAME_TOUCHDOWNS_TEAM',
  TotalGameTouchdownsTeamFirstHalf = 'TOTAL_GAME_TOUCHDOWNS_TEAM_FIRST_HALF',
  TotalGameTouchdownsTeamFirstQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_FIRST_QUARTER',
  TotalGameTouchdownsTeamFourthQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_FOURTH_QUARTER',
  TotalGameTouchdownsTeamSecondHalf = 'TOTAL_GAME_TOUCHDOWNS_TEAM_SECOND_HALF',
  TotalGameTouchdownsTeamSecondHalfNoOt = 'TOTAL_GAME_TOUCHDOWNS_TEAM_SECOND_HALF_NO_OT',
  TotalGameTouchdownsTeamSecondQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_SECOND_QUARTER',
  TotalGameTouchdownsTeamThirdQuarter = 'TOTAL_GAME_TOUCHDOWNS_TEAM_THIRD_QUARTER',
  TotalGameTouchdownsThirdQuarter = 'TOTAL_GAME_TOUCHDOWNS_THIRD_QUARTER',
  TotalGameTriple = 'TOTAL_GAME_TRIPLE',
  TotalGameTriplesTeam = 'TOTAL_GAME_TRIPLES_TEAM',
  TotalGameWalks = 'TOTAL_GAME_WALKS',
  TotalGameYellowCards = 'TOTAL_GAME_YELLOW_CARDS',
  TotalGameYellowCardsFirstHalf = 'TOTAL_GAME_YELLOW_CARDS_FIRST_HALF',
  TotalGameYellowCardsSecondHalf = 'TOTAL_GAME_YELLOW_CARDS_SECOND_HALF',
  TotalGameYellowCardsTeam = 'TOTAL_GAME_YELLOW_CARDS_TEAM',
  TotalGameYellowCardsTeamFirstHalf = 'TOTAL_GAME_YELLOW_CARDS_TEAM_FIRST_HALF',
  TotalGameYellowCardsTeamSecondHalf = 'TOTAL_GAME_YELLOW_CARDS_TEAM_SECOND_HALF',
  ToMakePlayoffs = 'TO_MAKE_PLAYOFFS',
  WinningMarginBandsMulti = 'WINNING_MARGIN_BANDS_MULTI',
  WinMarginMulti = 'WIN_MARGIN_MULTI',
  WireToWireMulti = 'WIRE_TO_WIRE_MULTI'
}

export enum BetMarketTypeGroupEnum {
  Game = 'GAME',
  Moneyline = 'MONEYLINE',
  PlayerProp = 'PLAYER_PROP',
  RaceTo = 'RACE_TO',
  Spread = 'SPREAD',
  Team = 'TEAM',
  Totals = 'TOTALS',
  Unknown = 'UNKNOWN'
}

export enum BetMarketTypeGroupEnumTypeTwo {
  Game = 'GAME',
  Moneyline = 'MONEYLINE',
  PlayerProp = 'PLAYER_PROP',
  RaceTo = 'RACE_TO',
  Spread = 'SPREAD',
  Team = 'TEAM',
  Totals = 'TOTALS',
  Unknown = 'UNKNOWN'
}

export interface BetMarketTypeGroupInfoType {
  readonly __typename: 'BetMarketTypeGroupInfoType';
  readonly order: Scalars['UInt'];
  readonly value?: Maybe<BetMarketTypeGroupEnumTypeTwo>;
}

export enum BetMarketTypeTimeEnum {
  EighthInning = 'EIGHTH_INNING',
  FifthInning = 'FIFTH_INNING',
  FirstHalf = 'FIRST_HALF',
  FirstInning = 'FIRST_INNING',
  FirstQuarter = 'FIRST_QUARTER',
  FourthInning = 'FOURTH_INNING',
  FourthQuarter = 'FOURTH_QUARTER',
  Game = 'GAME',
  NinthInning = 'NINTH_INNING',
  SecondHalf = 'SECOND_HALF',
  SecondInning = 'SECOND_INNING',
  SecondQuarter = 'SECOND_QUARTER',
  SeventhInning = 'SEVENTH_INNING',
  SixthInning = 'SIXTH_INNING',
  TenthInning = 'TENTH_INNING',
  ThirdInning = 'THIRD_INNING',
  ThirdQuarter = 'THIRD_QUARTER'
}

export interface BetSiteType {
  readonly __typename: 'BetSiteType';
  readonly abbreviation: Scalars['String'];
  readonly enumValue?: Maybe<BetMarketSiteEnumTypeTwo>;
  readonly fullImage: Scalars['String'];
  readonly iconImage: Scalars['String'];
  readonly id: Scalars['Byte'];
  readonly isSisterSite: Scalars['Boolean'];
  readonly name: Scalars['String'];
  readonly sisterSiteIds?: Maybe<ReadonlyArray<Maybe<Scalars['Byte']>>>;
}

export interface ConstantsType {
  readonly __typename: 'ConstantsType';
  readonly betGroups?: Maybe<ReadonlyArray<Maybe<BetMarketTypeGroupInfoType>>>;
  readonly betMarketInfo?: Maybe<ReadonlyArray<Maybe<BetMarketInfoType>>>;
  readonly betMarketTypes?: Maybe<ReadonlyArray<Maybe<BetMarketTypeEnumTypeTwo>>>;
  readonly betSites?: Maybe<ReadonlyArray<Maybe<BetSiteType>>>;
  readonly leagues?: Maybe<ReadonlyArray<Maybe<LeagueConstantType>>>;
  readonly restrictions?: Maybe<ReadonlyArray<Maybe<PickUserRestrictionsListType>>>;
  readonly sports?: Maybe<ReadonlyArray<Maybe<SportEnum>>>;
}

export interface EufaChampionsGameType {
  readonly __typename: 'EUFAChampionsGameType';
  readonly awayTeam?: Maybe<TeamType>;
  readonly awayTeamId: Scalars['UShort'];
  readonly homeTeam?: Maybe<TeamType>;
  readonly homeTeamId: Scalars['UShort'];
  readonly id: Scalars['ID'];
  readonly startDateTime?: Maybe<Scalars['Long']>;
}

export interface EnglishPremierGameType {
  readonly __typename: 'EnglishPremierGameType';
  readonly awayTeam?: Maybe<TeamType>;
  readonly awayTeamId: Scalars['UShort'];
  readonly homeTeam?: Maybe<TeamType>;
  readonly homeTeamId: Scalars['UShort'];
  readonly id: Scalars['ID'];
  readonly startDateTime?: Maybe<Scalars['Long']>;
}

export interface EuroLeagueBbGameType {
  readonly __typename: 'EuroLeagueBBGameType';
  readonly awayTeam?: Maybe<TeamType>;
  readonly awayTeamId: Scalars['UShort'];
  readonly homeTeam?: Maybe<TeamType>;
  readonly homeTeamId: Scalars['UShort'];
  readonly id: Scalars['ID'];
  readonly startDateTime?: Maybe<Scalars['Long']>;
}

export enum ExpectedValueFormulaCaseEnum {
  BestCase = 'BEST_CASE',
  WorstCase = 'WORST_CASE'
}

export enum ExpectedValueFormulaEnum {
  Additive = 'ADDITIVE',
  Multiplicative = 'MULTIPLICATIVE',
  Power = 'POWER',
  Shin = 'SHIN'
}

export interface ExpectedValueFormulaResultType {
  readonly __typename: 'ExpectedValueFormulaResultType';
  readonly fairValueAmericanOdds: Scalars['Int'];
  readonly formula?: Maybe<ExpectedValueFormulaEnum>;
  readonly rOI: Scalars['Decimal'];
  readonly weight: Scalars['Int'];
}

export interface ExpectedValueFormulaWeightInputSubscriptionRequestType {
  readonly formula: ExpectedValueFormulaEnum;
  readonly weight: Scalars['Int'];
}

export interface ExpectedValueInputSubscriptionRequestType {
  readonly betType: BetMarketTypeGroupEnumTypeTwo;
  readonly weights: ReadonlyArray<InputMaybe<InputBetExpectedValueBetSiteRequestType>>;
}

export interface ExpectedValueType {
  readonly __typename: 'ExpectedValueType';
  readonly americanOdds: ReadonlyArray<Scalars['Int']>;
  readonly awayTeam?: Maybe<TeamType>;
  readonly betMarketId?: Maybe<BetMarketTypeEnumTypeTwo>;
  readonly betMarketSiteIds: ReadonlyArray<BetMarketSiteEnum>;
  readonly betValues?: Maybe<ReadonlyArray<Maybe<Scalars['Decimal']>>>;
  readonly formula?: Maybe<ExpectedValueFormulaEnum>;
  readonly formulas?: Maybe<ReadonlyArray<Maybe<ExpectedValueFormulaResultType>>>;
  readonly foundDateTime?: Maybe<Scalars['Long']>;
  readonly game?: Maybe<IGameType>;
  readonly gameLiveData?: Maybe<GameLiveDataType>;
  readonly homeTeam?: Maybe<TeamType>;
  readonly id: Scalars['ID'];
  readonly juice: Scalars['Decimal'];
  readonly league: LeagueEnum;
  readonly player?: Maybe<PlayerType>;
  readonly rOI: Scalars['Decimal'];
  readonly teams?: Maybe<ReadonlyArray<Maybe<TeamType>>>;
  readonly urlBets?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly width: Scalars['UInt'];
}

export interface FreeBetType {
  readonly __typename: 'FreeBetType';
  readonly americanOdds: ReadonlyArray<Scalars['Int']>;
  readonly awayTeam?: Maybe<TeamType>;
  readonly betMarketId?: Maybe<BetMarketTypeEnumTypeTwo>;
  readonly betMarketSiteIds: ReadonlyArray<BetMarketSiteEnum>;
  readonly betValues?: Maybe<ReadonlyArray<Maybe<Scalars['Decimal']>>>;
  readonly conversionRate: Scalars['Decimal'];
  readonly foundDateTime?: Maybe<Scalars['Long']>;
  readonly game?: Maybe<IGameType>;
  readonly gameLiveData?: Maybe<GameLiveDataType>;
  readonly homeTeam?: Maybe<TeamType>;
  readonly id: Scalars['ID'];
  readonly league: LeagueEnum;
  readonly player?: Maybe<PlayerType>;
  readonly teams?: Maybe<ReadonlyArray<Maybe<TeamType>>>;
  readonly urlBets?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

export interface FrenchLigue1GameType {
  readonly __typename: 'FrenchLigue1GameType';
  readonly awayTeam?: Maybe<TeamType>;
  readonly awayTeamId: Scalars['UShort'];
  readonly homeTeam?: Maybe<TeamType>;
  readonly homeTeamId: Scalars['UShort'];
  readonly id: Scalars['ID'];
  readonly startDateTime?: Maybe<Scalars['Long']>;
}

export enum FuturesDateEnumType {
  Next_24Hours = 'NEXT_24_HOURS',
  Next_48Hours = 'NEXT_48_HOURS',
  Next_72Hours = 'NEXT_72_HOURS'
}

export interface GameLiveDataType {
  readonly __typename: 'GameLiveDataType';
  readonly additionalData: Scalars['String'];
  readonly awayTeamScore: Scalars['UInt'];
  readonly gameTimeSeconds?: Maybe<Scalars['UInt']>;
  readonly homeTeamPossession: Scalars['Boolean'];
  readonly homeTeamScore: Scalars['UInt'];
  readonly period: Scalars['String'];
}

export interface GermanBundesligaGameType {
  readonly __typename: 'GermanBundesligaGameType';
  readonly awayTeam?: Maybe<TeamType>;
  readonly awayTeamId: Scalars['UShort'];
  readonly homeTeam?: Maybe<TeamType>;
  readonly homeTeamId: Scalars['UShort'];
  readonly id: Scalars['ID'];
  readonly startDateTime?: Maybe<Scalars['Long']>;
}

export type IGameType = EufaChampionsGameType | EnglishPremierGameType | EuroLeagueBbGameType | FrenchLigue1GameType | GermanBundesligaGameType | ItalianSeriaAGameType | LaLlgaGameType | MlbGameType | NbaGameType | NcaabGameType | NcaafGameType | NflGameType | NhlGameType;

export interface InputArbitrageSubscriptionRequestType {
  /** This is a Unix Timestamp of only matches that will happen after the date sent in. */
  readonly afterDateTime?: InputMaybe<Scalars['Long']>;
  /** This is a Unix Timestamp of only matches that will happen before the date sent in. */
  readonly beforeDateTime?: InputMaybe<Scalars['Long']>;
  readonly betMarketTypeGroups?: InputMaybe<ReadonlyArray<InputMaybe<BetMarketTypeGroupEnumTypeTwo>>>;
  readonly betMarketTypes?: InputMaybe<ReadonlyArray<InputMaybe<BetMarketTypeEnumTypeTwo>>>;
  readonly betSites?: InputMaybe<ReadonlyArray<InputMaybe<BetMarketSiteEnumTypeTwo>>>;
  /** Two-letter (ISO 3166-1) country code. */
  readonly country?: InputMaybe<Scalars['String']>;
  /** This is to only allow bets within a specific upcoming date range. Within 24 hours, With 48 hours and so forth. */
  readonly futuresDate?: InputMaybe<FuturesDateEnumType>;
  readonly leagues?: InputMaybe<ReadonlyArray<InputMaybe<LeagueEnum>>>;
  /** This will limit to only matches that are live. If you send null, all live matches are included. However you can send None to remove all live matches or timeout to only show matches at timeout. */
  readonly liveGameStatus?: InputMaybe<LiveGameStatusEnum>;
  /** This is the largest odd allowed in the dataset. Example: If you set to +250, it will not allow any left or right bet to surpass +250. */
  readonly maxAmericanOdds?: InputMaybe<Scalars['Int']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets higher than 4.5% ROI. */
  readonly maxROI?: InputMaybe<Scalars['Decimal']>;
  /** This is the lowest odd allowed in the dataset. Example: If you set to -250, it will not allow any left or right bet to be below -250. */
  readonly minAmericanOdds?: InputMaybe<Scalars['Int']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets lower than 4.5% ROI. */
  readonly minROI?: InputMaybe<Scalars['Decimal']>;
  /** If you require that one of the two bets involve one specific sportsbook. */
  readonly mustIncludeBetSite?: InputMaybe<BetMarketSiteEnumTypeTwo>;
  /** The 2 digit state code of the users location. */
  readonly region?: InputMaybe<Scalars['String']>;
  readonly searchQuery?: InputMaybe<Scalars['String']>;
  /** Amount of results to return. The max is 100. The Default is 50. */
  readonly take?: InputMaybe<Scalars['Int']>;
  /** This will limit to only matches that are live. You can also send none and it will not send any upcoming matches and limit it to live only. */
  readonly upcomingGameStatus?: InputMaybe<UpcomingGameStatusEnum>;
}

export interface InputBetCacheSubscriptionRequestType {
  readonly betMarketType: BetMarketTypeEnumTypeTwo;
  readonly league: LeagueEnum;
}

export interface InputBetExpectedValueBetSiteRequestType {
  readonly betSite: BetMarketSiteEnumTypeTwo;
  readonly weight: Scalars['Int'];
}

export interface InputExpectedValueSubscriptionRequestType {
  /** This is a Unix Timestamp of only matches that will happen after the date sent in. */
  readonly afterDateTime?: InputMaybe<Scalars['Long']>;
  /** This is a Unix Timestamp of only matches that will happen before the date sent in. */
  readonly beforeDateTime?: InputMaybe<Scalars['Long']>;
  readonly betMarketTypeGroups?: InputMaybe<ReadonlyArray<InputMaybe<BetMarketTypeGroupEnumTypeTwo>>>;
  readonly betMarketTypes?: InputMaybe<ReadonlyArray<InputMaybe<BetMarketTypeEnumTypeTwo>>>;
  readonly betSites?: InputMaybe<ReadonlyArray<InputMaybe<BetMarketSiteEnumTypeTwo>>>;
  /** Two-letter (ISO 3166-1) country code. */
  readonly country?: InputMaybe<Scalars['String']>;
  readonly expectedValueFormulaCase?: InputMaybe<ExpectedValueFormulaCaseEnum>;
  readonly expectedValueFormulaWeight?: InputMaybe<ReadonlyArray<InputMaybe<ExpectedValueFormulaWeightInputSubscriptionRequestType>>>;
  readonly expectedValueWeights: ReadonlyArray<InputMaybe<ExpectedValueInputSubscriptionRequestType>>;
  /** This is to only allow bets within a specific upcoming date range. Within 24 hours, With 48 hours and so forth. */
  readonly futuresDate?: InputMaybe<FuturesDateEnumType>;
  readonly leagues?: InputMaybe<ReadonlyArray<InputMaybe<LeagueEnum>>>;
  /** This will limit to only matches that are live. If you send null, all live matches are included. However you can send None to remove all live matches or timeout to only show matches at timeout. */
  readonly liveGameStatus?: InputMaybe<LiveGameStatusEnum>;
  /** This is the largest odd allowed in the dataset. Example: If you set to +250, it will not allow any left or right bet to surpass +250. */
  readonly maxAmericanOdds?: InputMaybe<Scalars['Int']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets higher than 4.5% ROI. */
  readonly maxROI?: InputMaybe<Scalars['Decimal']>;
  /** This is the lowest odd allowed in the dataset. Example: If you set to -250, it will not allow any left or right bet to be below -250. */
  readonly minAmericanOdds?: InputMaybe<Scalars['Int']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets lower than 4.5% ROI. */
  readonly minROI?: InputMaybe<Scalars['Decimal']>;
  /** The minimum amount of sportbooks required in the EV for the play to appear. */
  readonly minWidth?: InputMaybe<Scalars['Int']>;
  /** If you require that one of the two bets involve one specific sportsbook. */
  readonly mustIncludeBetSite?: InputMaybe<BetMarketSiteEnumTypeTwo>;
  /** The 2 digit state code of the users location. */
  readonly region?: InputMaybe<Scalars['String']>;
  readonly searchQuery?: InputMaybe<Scalars['String']>;
  /** Amount of results to return. The max is 100. The Default is 50. */
  readonly take?: InputMaybe<Scalars['Int']>;
  /** This will limit to only matches that are live. You can also send none and it will not send any upcoming matches and limit it to live only. */
  readonly upcomingGameStatus?: InputMaybe<UpcomingGameStatusEnum>;
}

export interface InputFreeBetSubscriptionRequestType {
  /** This is a Unix Timestamp of only matches that will happen after the date sent in. */
  readonly afterDateTime?: InputMaybe<Scalars['Long']>;
  /** This is a Unix Timestamp of only matches that will happen before the date sent in. */
  readonly beforeDateTime?: InputMaybe<Scalars['Long']>;
  readonly betMarketTypeGroups?: InputMaybe<ReadonlyArray<InputMaybe<BetMarketTypeGroupEnumTypeTwo>>>;
  readonly betMarketTypes?: InputMaybe<ReadonlyArray<InputMaybe<BetMarketTypeEnumTypeTwo>>>;
  readonly betSites?: InputMaybe<ReadonlyArray<InputMaybe<BetMarketSiteEnumTypeTwo>>>;
  /** Two-letter (ISO 3166-1) country code. */
  readonly country?: InputMaybe<Scalars['String']>;
  readonly freeBetPrimaryBetSite: BetMarketSiteEnumTypeTwo;
  /** This is to only allow bets within a specific upcoming date range. Within 24 hours, With 48 hours and so forth. */
  readonly futuresDate?: InputMaybe<FuturesDateEnumType>;
  readonly leagues?: InputMaybe<ReadonlyArray<InputMaybe<LeagueEnum>>>;
  /** This will limit to only matches that are live. If you send null, all live matches are included. However you can send None to remove all live matches or timeout to only show matches at timeout. */
  readonly liveGameStatus?: InputMaybe<LiveGameStatusEnum>;
  /** This is the largest odd allowed in the dataset. Example: If you set to +250, it will not allow any left or right bet to surpass +250. */
  readonly maxAmericanOdds?: InputMaybe<Scalars['Int']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets higher than 4.5% ROI. */
  readonly maxROI?: InputMaybe<Scalars['Decimal']>;
  /** This is the lowest odd allowed in the dataset. Example: If you set to -250, it will not allow any left or right bet to be below -250. */
  readonly minAmericanOdds?: InputMaybe<Scalars['Int']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets lower than 4.5% ROI. */
  readonly minROI?: InputMaybe<Scalars['Decimal']>;
  /** If you require that one of the two bets involve one specific sportsbook. */
  readonly mustIncludeBetSite?: InputMaybe<BetMarketSiteEnumTypeTwo>;
  /** The 2 digit state code of the users location. */
  readonly region?: InputMaybe<Scalars['String']>;
  readonly searchQuery?: InputMaybe<Scalars['String']>;
  /** Amount of results to return. The max is 100. The Default is 50. */
  readonly take?: InputMaybe<Scalars['Int']>;
  /** This will limit to only matches that are live. You can also send none and it will not send any upcoming matches and limit it to live only. */
  readonly upcomingGameStatus?: InputMaybe<UpcomingGameStatusEnum>;
}

export interface InputLowHoldSubscriptionRequestType {
  /** This is a Unix Timestamp of only matches that will happen after the date sent in. */
  readonly afterDateTime?: InputMaybe<Scalars['Long']>;
  /** This is a Unix Timestamp of only matches that will happen before the date sent in. */
  readonly beforeDateTime?: InputMaybe<Scalars['Long']>;
  readonly betMarketTypeGroups?: InputMaybe<ReadonlyArray<InputMaybe<BetMarketTypeGroupEnumTypeTwo>>>;
  readonly betMarketTypes?: InputMaybe<ReadonlyArray<InputMaybe<BetMarketTypeEnumTypeTwo>>>;
  readonly betSites?: InputMaybe<ReadonlyArray<InputMaybe<BetMarketSiteEnumTypeTwo>>>;
  /** Two-letter (ISO 3166-1) country code. */
  readonly country?: InputMaybe<Scalars['String']>;
  /** This is to only allow bets within a specific upcoming date range. Within 24 hours, With 48 hours and so forth. */
  readonly futuresDate?: InputMaybe<FuturesDateEnumType>;
  readonly leagues?: InputMaybe<ReadonlyArray<InputMaybe<LeagueEnum>>>;
  /** This will limit to only matches that are live. If you send null, all live matches are included. However you can send None to remove all live matches or timeout to only show matches at timeout. */
  readonly liveGameStatus?: InputMaybe<LiveGameStatusEnum>;
  readonly lowHoldPrimaryBetSite: BetMarketSiteEnumTypeTwo;
  /** This is the largest odd allowed in the dataset. Example: If you set to +250, it will not allow any left or right bet to surpass +250. */
  readonly maxAmericanOdds?: InputMaybe<Scalars['Int']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets higher than 4.5% ROI. */
  readonly maxROI?: InputMaybe<Scalars['Decimal']>;
  /** This is the lowest odd allowed in the dataset. Example: If you set to -250, it will not allow any left or right bet to be below -250. */
  readonly minAmericanOdds?: InputMaybe<Scalars['Int']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets lower than 4.5% ROI. */
  readonly minROI?: InputMaybe<Scalars['Decimal']>;
  /** If you require that one of the two bets involve one specific sportsbook. */
  readonly mustIncludeBetSite?: InputMaybe<BetMarketSiteEnumTypeTwo>;
  /** The 2 digit state code of the users location. */
  readonly region?: InputMaybe<Scalars['String']>;
  readonly searchQuery?: InputMaybe<Scalars['String']>;
  /** Amount of results to return. The max is 100. The Default is 50. */
  readonly take?: InputMaybe<Scalars['Int']>;
  /** This will limit to only matches that are live. You can also send none and it will not send any upcoming matches and limit it to live only. */
  readonly upcomingGameStatus?: InputMaybe<UpcomingGameStatusEnum>;
}

export interface InputMiddleSubscriptionRequestType {
  /** This is a Unix Timestamp of only matches that will happen after the date sent in. */
  readonly afterDateTime?: InputMaybe<Scalars['Long']>;
  /** This is a Unix Timestamp of only matches that will happen before the date sent in. */
  readonly beforeDateTime?: InputMaybe<Scalars['Long']>;
  readonly betMarketTypeGroups?: InputMaybe<ReadonlyArray<InputMaybe<BetMarketTypeGroupEnumTypeTwo>>>;
  readonly betMarketTypes?: InputMaybe<ReadonlyArray<InputMaybe<BetMarketTypeEnumTypeTwo>>>;
  readonly betSites?: InputMaybe<ReadonlyArray<InputMaybe<BetMarketSiteEnumTypeTwo>>>;
  /** Two-letter (ISO 3166-1) country code. */
  readonly country?: InputMaybe<Scalars['String']>;
  /** The difference between the two values. For example, if you send 1, and the over is 122 and under is 122.5, this bet will now be shown since the distance is not greater than 1. */
  readonly distance?: InputMaybe<Scalars['Decimal']>;
  /** This is to only allow bets within a specific upcoming date range. Within 24 hours, With 48 hours and so forth. */
  readonly futuresDate?: InputMaybe<FuturesDateEnumType>;
  readonly leagues?: InputMaybe<ReadonlyArray<InputMaybe<LeagueEnum>>>;
  /** This will limit to only matches that are live. If you send null, all live matches are included. However you can send None to remove all live matches or timeout to only show matches at timeout. */
  readonly liveGameStatus?: InputMaybe<LiveGameStatusEnum>;
  /** This is the largest odd allowed in the dataset. Example: If you set to +250, it will not allow any left or right bet to surpass +250. */
  readonly maxAmericanOdds?: InputMaybe<Scalars['Int']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets higher than 4.5% ROI. */
  readonly maxROI?: InputMaybe<Scalars['Decimal']>;
  /** This is the lowest odd allowed in the dataset. Example: If you set to -250, it will not allow any left or right bet to be below -250. */
  readonly minAmericanOdds?: InputMaybe<Scalars['Int']>;
  /** ROI stands for Return on Investment.  This is a percentage. If you send 4.5, you will not see any bets lower than 4.5% ROI. */
  readonly minROI?: InputMaybe<Scalars['Decimal']>;
  /** If you require that one of the two bets involve one specific sportsbook. */
  readonly mustIncludeBetSite?: InputMaybe<BetMarketSiteEnumTypeTwo>;
  /** The 2 digit state code of the users location. */
  readonly region?: InputMaybe<Scalars['String']>;
  readonly searchQuery?: InputMaybe<Scalars['String']>;
  /** Amount of results to return. The max is 100. The Default is 50. */
  readonly take?: InputMaybe<Scalars['Int']>;
  /** This will limit to only matches that are live. You can also send none and it will not send any upcoming matches and limit it to live only. */
  readonly upcomingGameStatus?: InputMaybe<UpcomingGameStatusEnum>;
}

export interface IpGeoLookupType {
  readonly __typename: 'IpGeoLookupType';
  readonly as?: Maybe<Scalars['String']>;
  readonly asName?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly continent?: Maybe<Scalars['String']>;
  readonly continentCode?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly countryCode?: Maybe<Scalars['String']>;
  readonly currency?: Maybe<Scalars['String']>;
  readonly district?: Maybe<Scalars['String']>;
  readonly hosting?: Maybe<Scalars['Boolean']>;
  readonly isp?: Maybe<Scalars['String']>;
  readonly lat?: Maybe<Scalars['Float']>;
  readonly lon?: Maybe<Scalars['Float']>;
  readonly mobile?: Maybe<Scalars['Boolean']>;
  readonly offset?: Maybe<Scalars['Int']>;
  readonly org?: Maybe<Scalars['String']>;
  readonly proxy?: Maybe<Scalars['Boolean']>;
  readonly query: Scalars['String'];
  readonly region?: Maybe<Scalars['String']>;
  readonly regionName?: Maybe<Scalars['String']>;
  readonly status: Scalars['String'];
  readonly timezone?: Maybe<Scalars['String']>;
  readonly zip?: Maybe<Scalars['String']>;
}

export interface ItalianSeriaAGameType {
  readonly __typename: 'ItalianSeriaAGameType';
  readonly awayTeam?: Maybe<TeamType>;
  readonly awayTeamId: Scalars['UShort'];
  readonly homeTeam?: Maybe<TeamType>;
  readonly homeTeamId: Scalars['UShort'];
  readonly id: Scalars['ID'];
  readonly startDateTime?: Maybe<Scalars['Long']>;
}

export interface LaLlgaGameType {
  readonly __typename: 'LaLlgaGameType';
  readonly awayTeam?: Maybe<TeamType>;
  readonly awayTeamId: Scalars['UShort'];
  readonly homeTeam?: Maybe<TeamType>;
  readonly homeTeamId: Scalars['UShort'];
  readonly id: Scalars['ID'];
  readonly startDateTime?: Maybe<Scalars['Long']>;
}

export interface LeagueConstantType {
  readonly __typename: 'LeagueConstantType';
  readonly id?: Maybe<LeagueEnum>;
  readonly sportId?: Maybe<SportEnum>;
}

export enum LeagueEnum {
  EnglishPremier = 'ENGLISH_PREMIER',
  EufaChampions = 'EUFA_CHAMPIONS',
  EuroLeagueBb = 'EURO_LEAGUE_BB',
  FrenchLigue_1 = 'FRENCH_LIGUE_1',
  GermanBundesliga = 'GERMAN_BUNDESLIGA',
  ItalianSeriaA = 'ITALIAN_SERIA_A',
  LaLlga = 'LA_LLGA',
  Mlb = 'MLB',
  Nba = 'NBA',
  Ncaab = 'NCAAB',
  Ncaaf = 'NCAAF',
  NcaaBaseball = 'NCAA_BASEBALL',
  Nfl = 'NFL',
  Nhl = 'NHL'
}

export enum LiveGameStatusEnum {
  All = 'ALL',
  None = 'NONE',
  Timeout = 'TIMEOUT'
}

export interface LowHoldType {
  readonly __typename: 'LowHoldType';
  readonly americanOdds: ReadonlyArray<Scalars['Int']>;
  readonly awayTeam?: Maybe<TeamType>;
  readonly betMarketId?: Maybe<BetMarketTypeEnumTypeTwo>;
  readonly betMarketSiteIds: ReadonlyArray<BetMarketSiteEnum>;
  readonly betValues?: Maybe<ReadonlyArray<Maybe<Scalars['Decimal']>>>;
  readonly foundDateTime?: Maybe<Scalars['Long']>;
  readonly game?: Maybe<IGameType>;
  readonly gameLiveData?: Maybe<GameLiveDataType>;
  readonly homeTeam?: Maybe<TeamType>;
  readonly id: Scalars['ID'];
  readonly league: LeagueEnum;
  readonly player?: Maybe<PlayerType>;
  readonly rOI: Scalars['Decimal'];
  readonly teams?: Maybe<ReadonlyArray<Maybe<TeamType>>>;
  readonly urlBets?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

export interface MlbGameType {
  readonly __typename: 'MLBGameType';
  readonly awayTeam?: Maybe<TeamType>;
  readonly awayTeamId: Scalars['UShort'];
  readonly homeTeam?: Maybe<TeamType>;
  readonly homeTeamId: Scalars['UShort'];
  readonly id: Scalars['ID'];
  readonly startDateTime?: Maybe<Scalars['Long']>;
}

export interface MiddleType {
  readonly __typename: 'MiddleType';
  readonly americanOdds: ReadonlyArray<Scalars['Int']>;
  readonly awayTeam?: Maybe<TeamType>;
  readonly betMarketId?: Maybe<BetMarketTypeEnumTypeTwo>;
  readonly betMarketSiteIds: ReadonlyArray<BetMarketSiteEnum>;
  readonly betValues?: Maybe<ReadonlyArray<Maybe<Scalars['Decimal']>>>;
  readonly foundDateTime?: Maybe<Scalars['Long']>;
  readonly game?: Maybe<IGameType>;
  readonly gameLiveData?: Maybe<GameLiveDataType>;
  readonly homeTeam?: Maybe<TeamType>;
  readonly id: Scalars['ID'];
  readonly league: LeagueEnum;
  readonly player?: Maybe<PlayerType>;
  readonly rOI: Scalars['Decimal'];
  readonly teams?: Maybe<ReadonlyArray<Maybe<TeamType>>>;
  readonly urlBets?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
}

export interface Mutation {
  readonly __typename: 'Mutation';
  readonly admin?: Maybe<AdminMutationType>;
  readonly user?: Maybe<UserMutationType>;
}

export interface NbaGameType {
  readonly __typename: 'NBAGameType';
  readonly awayTeam?: Maybe<TeamType>;
  readonly awayTeamId: Scalars['UShort'];
  readonly homeTeam?: Maybe<TeamType>;
  readonly homeTeamId: Scalars['UShort'];
  readonly id: Scalars['ID'];
  readonly startDateTime?: Maybe<Scalars['Long']>;
}

export interface NcaabGameType {
  readonly __typename: 'NCAABGameType';
  readonly awayTeam?: Maybe<TeamType>;
  readonly awayTeamId: Scalars['UShort'];
  readonly homeTeam?: Maybe<TeamType>;
  readonly homeTeamId: Scalars['UShort'];
  readonly id: Scalars['ID'];
  readonly startDateTime?: Maybe<Scalars['Long']>;
}

export interface NcaafGameType {
  readonly __typename: 'NCAAFGameType';
  readonly awayTeam?: Maybe<TeamType>;
  readonly awayTeamId: Scalars['UShort'];
  readonly homeTeam?: Maybe<TeamType>;
  readonly homeTeamId: Scalars['UShort'];
  readonly id: Scalars['ID'];
  readonly startDateTime?: Maybe<Scalars['Long']>;
}

export interface NflGameType {
  readonly __typename: 'NFLGameType';
  readonly awayTeam?: Maybe<TeamType>;
  readonly awayTeamId: Scalars['UShort'];
  readonly homeTeam?: Maybe<TeamType>;
  readonly homeTeamId: Scalars['UShort'];
  readonly id: Scalars['ID'];
  readonly startDateTime?: Maybe<Scalars['Long']>;
}

export interface NhlGameType {
  readonly __typename: 'NHLGameType';
  readonly awayTeam?: Maybe<TeamType>;
  readonly awayTeamId: Scalars['UShort'];
  readonly homeTeam?: Maybe<TeamType>;
  readonly homeTeamId: Scalars['UShort'];
  readonly id: Scalars['ID'];
  readonly startDateTime?: Maybe<Scalars['Long']>;
}

export enum PackageTypeEnum {
  Advanced = 'ADVANCED',
  Anonymous = 'ANONYMOUS',
  Intermediate = 'INTERMEDIATE',
  LoggedIn = 'LOGGED_IN',
  Starter = 'STARTER'
}

export interface PickUserRestrictionType {
  readonly __typename: 'PickUserRestrictionType';
  readonly leagueLimit?: Maybe<Scalars['UInt']>;
  readonly maxResult?: Maybe<Scalars['UInt']>;
  readonly rOILimit?: Maybe<Scalars['Decimal']>;
  readonly sportbookLimit?: Maybe<Scalars['UInt']>;
  readonly toolEnum: ToolEnum;
}

export interface PickUserRestrictionsListType {
  readonly __typename: 'PickUserRestrictionsListType';
  readonly package?: Maybe<PackageTypeEnum>;
  readonly price?: Maybe<Scalars['Decimal']>;
  readonly restrictions?: Maybe<ReadonlyArray<Maybe<PickUserRestrictionType>>>;
  readonly trialDays?: Maybe<Scalars['Int']>;
}

export interface PickUserType {
  readonly __typename: 'PickUserType';
  readonly activePackageType?: Maybe<PackageTypeEnum>;
  readonly emailAddress: Scalars['String'];
  readonly settings?: Maybe<Scalars['String']>;
  readonly usedTrial: Scalars['Boolean'];
  readonly userId: Scalars['ID'];
}

export interface PlayerType {
  readonly __typename: 'PlayerType';
  readonly firstName?: Maybe<Scalars['String']>;
  readonly id: Scalars['UInt'];
  readonly lastName?: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
}

export interface Query {
  readonly __typename: 'Query';
  readonly betCacheCategories?: Maybe<ReadonlyArray<Maybe<BetMarketTypeEnumTypeTwo>>>;
  readonly betMarket?: Maybe<ReadonlyArray<Maybe<BetMarketType>>>;
  readonly constants?: Maybe<ConstantsType>;
  readonly games?: Maybe<ReadonlyArray<Maybe<IGameType>>>;
  readonly user?: Maybe<UserQueryType>;
}


export interface QueryBetCacheCategoriesArgs {
  league: LeagueEnum;
}


export interface QueryBetMarketArgs {
  id: Scalars['Guid'];
}


export interface QueryGamesArgs {
  ids: ReadonlyArray<InputMaybe<Scalars['Guid']>>;
  league: LeagueEnum;
}

export enum ServerStatusEnum {
  Degraded = 'DEGRADED',
  Maintenance = 'MAINTENANCE',
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

export interface ServerStatusType {
  readonly __typename: 'ServerStatusType';
  readonly arbitrageCountByBetSite: ReadonlyArray<Scalars['Int']>;
  readonly arbitrageCountByLeague: ReadonlyArray<Scalars['Int']>;
  readonly expectedValueCountByBetSite: ReadonlyArray<Scalars['Int']>;
  readonly expectedValueCountByLeague: ReadonlyArray<Scalars['Int']>;
  readonly freeBetCountByBetSite: ReadonlyArray<Scalars['Int']>;
  readonly freeBetCountByLeague: ReadonlyArray<Scalars['Int']>;
  readonly gameCountByLeagueEnumIdx: ReadonlyArray<Scalars['Int']>;
  readonly lowHoldCountByBetSite: ReadonlyArray<Scalars['Int']>;
  readonly lowHoldCountByLeague: ReadonlyArray<Scalars['Int']>;
  readonly middleCountByBetSite: ReadonlyArray<Scalars['Int']>;
  readonly middleCountByLeague: ReadonlyArray<Scalars['Int']>;
  readonly serverStatusId: ServerStatusEnum;
}

export enum SportEnum {
  Baseball = 'BASEBALL',
  Basketball = 'BASKETBALL',
  Football = 'FOOTBALL',
  IceHockey = 'ICE_HOCKEY',
  Soccer = 'SOCCER',
  Tennis = 'TENNIS'
}

export interface StripeAddressType {
  readonly __typename: 'StripeAddressType';
  readonly city?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly line1?: Maybe<Scalars['String']>;
  readonly line2?: Maybe<Scalars['String']>;
  readonly postalCode?: Maybe<Scalars['String']>;
  readonly state?: Maybe<Scalars['String']>;
}

export interface StripePaymentIntentType {
  readonly __typename: 'StripePaymentIntentType';
  readonly amount: Scalars['Long'];
  readonly canceledAt?: Maybe<Scalars['Long']>;
  readonly created?: Maybe<Scalars['Long']>;
  readonly currency: Scalars['String'];
  readonly description: Scalars['String'];
  readonly id: Scalars['String'];
  readonly object: Scalars['String'];
  readonly status: Scalars['String'];
}

export interface StripePaymentMethodBillingDetailsType {
  readonly __typename: 'StripePaymentMethodBillingDetailsType';
  readonly address?: Maybe<StripeAddressType>;
  readonly name?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
}

export interface StripePaymentMethodCardType {
  readonly __typename: 'StripePaymentMethodCardType';
  readonly brand?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly expMonth?: Maybe<Scalars['Long']>;
  readonly expYear?: Maybe<Scalars['Long']>;
  readonly fingerprint?: Maybe<Scalars['String']>;
  readonly funding?: Maybe<Scalars['String']>;
  readonly iin?: Maybe<Scalars['String']>;
  readonly issuer?: Maybe<Scalars['String']>;
  readonly last4?: Maybe<Scalars['String']>;
}

export interface StripePaymentMethodType {
  readonly __typename: 'StripePaymentMethodType';
  readonly billingDetails?: Maybe<StripePaymentMethodBillingDetailsType>;
  readonly card?: Maybe<StripePaymentMethodCardType>;
  readonly created?: Maybe<Scalars['Long']>;
  readonly id: Scalars['String'];
  readonly object: Scalars['String'];
  readonly type: Scalars['String'];
}

export interface StripePriceRecurringType {
  readonly __typename: 'StripePriceRecurringType';
  readonly aggregateUsage: Scalars['String'];
  readonly interval: Scalars['String'];
  readonly intervalCount: Scalars['Long'];
  readonly trialPeriodDays?: Maybe<Scalars['Long']>;
  readonly usageType?: Maybe<Scalars['String']>;
}

export interface StripePriceType {
  readonly __typename: 'StripePriceType';
  readonly active: Scalars['Boolean'];
  readonly billingScheme: Scalars['String'];
  readonly created?: Maybe<Scalars['Long']>;
  readonly currency?: Maybe<Scalars['String']>;
  readonly deleted?: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['String'];
  readonly nickname?: Maybe<Scalars['String']>;
  readonly object: Scalars['String'];
  readonly recurring?: Maybe<StripePriceRecurringType>;
  readonly unitAmountDecimal?: Maybe<Scalars['Decimal']>;
}

export interface StripeSubscriptionItemType {
  readonly __typename: 'StripeSubscriptionItemType';
  readonly deleted?: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['String'];
  readonly object: Scalars['String'];
  readonly price?: Maybe<StripePriceType>;
  readonly quantity?: Maybe<Scalars['Long']>;
  readonly subscription?: Maybe<Scalars['String']>;
}

export interface StripeSubscriptionType {
  readonly __typename: 'StripeSubscriptionType';
  readonly cancelAtPeriodEnd: Scalars['Boolean'];
  readonly canceledAt?: Maybe<Scalars['Long']>;
  readonly created?: Maybe<Scalars['Long']>;
  readonly currency: Scalars['String'];
  readonly currentPeriodEnd?: Maybe<Scalars['Long']>;
  readonly currentPeriodStart?: Maybe<Scalars['Long']>;
  readonly data?: Maybe<ReadonlyArray<Maybe<StripeSubscriptionItemType>>>;
  readonly daysUntilDue?: Maybe<Scalars['Long']>;
  readonly description: Scalars['String'];
  readonly id: Scalars['String'];
  readonly object: Scalars['String'];
  readonly status: Scalars['String'];
  readonly trialEnd?: Maybe<Scalars['Long']>;
  readonly trialStart?: Maybe<Scalars['Long']>;
}

export interface Subscription {
  readonly __typename: 'Subscription';
  readonly arbitrages?: Maybe<ReadonlyArray<Maybe<ArbitrageType>>>;
  readonly betCache?: Maybe<ReadonlyArray<Maybe<BetMarketType>>>;
  readonly expectedvalues?: Maybe<ReadonlyArray<Maybe<ExpectedValueType>>>;
  readonly freebets?: Maybe<ReadonlyArray<Maybe<FreeBetType>>>;
  readonly lowholds?: Maybe<ReadonlyArray<Maybe<LowHoldType>>>;
  readonly middles?: Maybe<ReadonlyArray<Maybe<MiddleType>>>;
  readonly serverStatus?: Maybe<ServerStatusType>;
}


export interface SubscriptionArbitragesArgs {
  request?: InputMaybe<InputArbitrageSubscriptionRequestType>;
}


export interface SubscriptionBetCacheArgs {
  request?: InputMaybe<InputBetCacheSubscriptionRequestType>;
}


export interface SubscriptionExpectedvaluesArgs {
  request?: InputMaybe<InputExpectedValueSubscriptionRequestType>;
}


export interface SubscriptionFreebetsArgs {
  request?: InputMaybe<InputFreeBetSubscriptionRequestType>;
}


export interface SubscriptionLowholdsArgs {
  request?: InputMaybe<InputLowHoldSubscriptionRequestType>;
}


export interface SubscriptionMiddlesArgs {
  request?: InputMaybe<InputMiddleSubscriptionRequestType>;
}

export interface TeamType {
  readonly __typename: 'TeamType';
  readonly abbreviations: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly city: Scalars['String'];
  readonly id: Scalars['UShort'];
  readonly name: Scalars['String'];
}

export interface TokenResponseType {
  readonly __typename: 'TokenResponseType';
  readonly accessToken: Scalars['String'];
}

export enum ToolEnum {
  Arbitrage = 'ARBITRAGE',
  Ev = 'EV',
  FreeBetConverter = 'FREE_BET_CONVERTER',
  LowHold = 'LOW_HOLD',
  Middle = 'MIDDLE'
}

export enum UpcomingGameStatusEnum {
  All = 'ALL',
  None = 'NONE'
}

export interface UserMutationType {
  readonly __typename: 'UserMutationType';
  readonly emailVerification?: Maybe<VerifyResponseType>;
  readonly purchase?: Maybe<Scalars['String']>;
  readonly signup?: Maybe<Scalars['Boolean']>;
  /** Every call to the API requires a token of some sort except this one. This should be the first call to get a token. If you send in an UserId & RefreshToken param then you will be checked and could get back an error. However, if you send in the correct settings you will get a new token. */
  readonly token?: Maybe<TokenResponseType>;
  readonly user?: Maybe<Scalars['Boolean']>;
}


export interface UserMutationTypeEmailVerificationArgs {
  code: Scalars['String'];
  hashCode: Scalars['String'];
}


export interface UserMutationTypePurchaseArgs {
  packageType: PackageTypeEnum;
}


export interface UserMutationTypeSignupArgs {
  cfTurnstileToken: Scalars['String'];
  email: Scalars['String'];
  hashCode: Scalars['String'];
  promoCode?: InputMaybe<Scalars['String']>;
}


export interface UserMutationTypeTokenArgs {
  refreshToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Guid']>;
}


export interface UserMutationTypeUserArgs {
  settings?: InputMaybe<Scalars['String']>;
}

export interface UserQueryType {
  readonly __typename: 'UserQueryType';
  readonly ipGeoLookup?: Maybe<IpGeoLookupType>;
  readonly paymentHistories?: Maybe<ReadonlyArray<Maybe<StripePaymentIntentType>>>;
  readonly paymentMethods?: Maybe<ReadonlyArray<Maybe<StripePaymentMethodType>>>;
  readonly paymentPortal?: Maybe<Scalars['String']>;
  readonly restrictions?: Maybe<ReadonlyArray<Maybe<PickUserRestrictionType>>>;
  readonly subscriptions?: Maybe<ReadonlyArray<Maybe<StripeSubscriptionType>>>;
  readonly user?: Maybe<PickUserType>;
}


export interface UserQueryTypePaymentHistoriesArgs {
  take?: InputMaybe<Scalars['Int']>;
}


export interface UserQueryTypePaymentMethodsArgs {
  take?: InputMaybe<Scalars['Int']>;
}


export interface UserQueryTypeSubscriptionsArgs {
  take?: InputMaybe<Scalars['Int']>;
}

export interface VerifyResponseType {
  readonly __typename: 'VerifyResponseType';
  readonly accessToken: Scalars['String'];
  readonly refreshToken: Scalars['String'];
  readonly userId: Scalars['ID'];
}

export type UserTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type UserTokenMutation = { readonly __typename: 'Mutation', readonly user?: { readonly __typename: 'UserMutationType', readonly token?: { readonly __typename: 'TokenResponseType', readonly accessToken: string } | null } | null };

export type ConstantsQueryVariables = Exact<{ [key: string]: never; }>;


export type ConstantsQuery = { readonly __typename: 'Query', readonly constants?: { readonly __typename: 'ConstantsType', readonly betSites?: ReadonlyArray<{ readonly __typename: 'BetSiteType', readonly id: any, readonly name: string, readonly iconImage: string, readonly enumValue?: BetMarketSiteEnumTypeTwo | null } | null> | null } | null };

export type GamesDataQueryVariables = Exact<{
  ids: ReadonlyArray<InputMaybe<Scalars['Guid']>> | InputMaybe<Scalars['Guid']>;
  league: LeagueEnum;
}>;


export type GamesDataQuery = { readonly __typename: 'Query', readonly games?: ReadonlyArray<{ readonly __typename: 'EUFAChampionsGameType' } | { readonly __typename: 'EnglishPremierGameType' } | { readonly __typename: 'EuroLeagueBBGameType' } | { readonly __typename: 'FrenchLigue1GameType' } | { readonly __typename: 'GermanBundesligaGameType' } | { readonly __typename: 'ItalianSeriaAGameType' } | { readonly __typename: 'LaLlgaGameType' } | { readonly __typename: 'MLBGameType' } | { readonly __typename: 'NBAGameType', readonly id: string, readonly awayTeam?: { readonly __typename: 'TeamType', readonly id: any, readonly name: string } | null, readonly homeTeam?: { readonly __typename: 'TeamType', readonly id: any, readonly name: string } | null } | { readonly __typename: 'NCAABGameType' } | { readonly __typename: 'NCAAFGameType' } | { readonly __typename: 'NFLGameType', readonly id: string, readonly awayTeam?: { readonly __typename: 'TeamType', readonly id: any, readonly name: string } | null, readonly homeTeam?: { readonly __typename: 'TeamType', readonly id: any, readonly name: string } | null } | { readonly __typename: 'NHLGameType' } | null> | null };

export type BetCacheSubscriptionVariables = Exact<{
  request: InputBetCacheSubscriptionRequestType;
}>;


export type BetCacheSubscription = { readonly __typename: 'Subscription', readonly betCache?: ReadonlyArray<{ readonly __typename: 'BetMarketType', readonly gameId: string, readonly conditions?: ReadonlyArray<{ readonly __typename: 'BetMarketConditionType', readonly betValue?: any | null, readonly betValueMax?: any | null, readonly teamId?: any | null, readonly playerId?: any | null, readonly marketType: BetMarketTypeEnum } | null> | null, readonly listings?: ReadonlyArray<{ readonly __typename: 'BetMarketListingType', readonly site?: { readonly __typename: 'BetSiteType', readonly id: any } | null } | null> | null } | null> | null };


export const UserTokenDocument = gql`
    mutation UserToken {
  user {
    token {
      accessToken
    }
  }
}
    `;
export type UserTokenMutationFn = Apollo.MutationFunction<UserTokenMutation, UserTokenMutationVariables>;
export function useUserTokenMutation(baseOptions?: Apollo.MutationHookOptions<UserTokenMutation, UserTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserTokenMutation, UserTokenMutationVariables>(UserTokenDocument, options);
      }
export type UserTokenMutationHookResult = ReturnType<typeof useUserTokenMutation>;
export type UserTokenMutationResult = Apollo.MutationResult<UserTokenMutation>;
export type UserTokenMutationOptions = Apollo.BaseMutationOptions<UserTokenMutation, UserTokenMutationVariables>;
export const ConstantsDocument = gql`
    query constants {
  constants {
    betSites {
      id
      name
      iconImage
      enumValue
    }
  }
}
    `;
export function useConstantsQuery(baseOptions?: Apollo.QueryHookOptions<ConstantsQuery, ConstantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConstantsQuery, ConstantsQueryVariables>(ConstantsDocument, options);
      }
export function useConstantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConstantsQuery, ConstantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConstantsQuery, ConstantsQueryVariables>(ConstantsDocument, options);
        }
export type ConstantsQueryHookResult = ReturnType<typeof useConstantsQuery>;
export type ConstantsLazyQueryHookResult = ReturnType<typeof useConstantsLazyQuery>;
export type ConstantsQueryResult = Apollo.QueryResult<ConstantsQuery, ConstantsQueryVariables>;
export const GamesDataDocument = gql`
    query GamesData($ids: [Guid]!, $league: LeagueEnum!) {
  games(ids: $ids, league: $league) {
    ... on NBAGameType {
      id
      awayTeam {
        id
        name
      }
      homeTeam {
        id
        name
      }
    }
    ... on NFLGameType {
      id
      awayTeam {
        id
        name
      }
      homeTeam {
        id
        name
      }
    }
  }
}
    `;
export function useGamesDataQuery(baseOptions: Apollo.QueryHookOptions<GamesDataQuery, GamesDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GamesDataQuery, GamesDataQueryVariables>(GamesDataDocument, options);
      }
export function useGamesDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GamesDataQuery, GamesDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GamesDataQuery, GamesDataQueryVariables>(GamesDataDocument, options);
        }
export type GamesDataQueryHookResult = ReturnType<typeof useGamesDataQuery>;
export type GamesDataLazyQueryHookResult = ReturnType<typeof useGamesDataLazyQuery>;
export type GamesDataQueryResult = Apollo.QueryResult<GamesDataQuery, GamesDataQueryVariables>;
export const BetCacheDocument = gql`
    subscription BetCache($request: InputBetCacheSubscriptionRequestType!) {
  betCache(request: $request) {
    gameId
    conditions {
      betValue
      betValueMax
      teamId
      playerId
      marketType
    }
    listings {
      site {
        id
      }
    }
  }
}
    `;
export function useBetCacheSubscription(baseOptions: Apollo.SubscriptionHookOptions<BetCacheSubscription, BetCacheSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<BetCacheSubscription, BetCacheSubscriptionVariables>(BetCacheDocument, options);
      }
export type BetCacheSubscriptionHookResult = ReturnType<typeof useBetCacheSubscription>;
export type BetCacheSubscriptionResult = Apollo.SubscriptionResult<BetCacheSubscription>;