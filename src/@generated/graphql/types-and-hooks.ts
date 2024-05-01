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

export interface BetMarketType {
  readonly __typename: 'BetMarketType';
  readonly gameId: Scalars['ID'];
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

export type IGameType = NbaGameType | NflGameType;

export interface InputBetCacheSubscriptionRequestType {
  readonly betMarketType: BetMarketTypeEnumTypeTwo;
  readonly league: LeagueEnum;
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

export interface Mutation {
  readonly __typename: 'Mutation';
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

export interface NflGameType {
  readonly __typename: 'NFLGameType';
  readonly awayTeam?: Maybe<TeamType>;
  readonly awayTeamId: Scalars['UShort'];
  readonly homeTeam?: Maybe<TeamType>;
  readonly homeTeamId: Scalars['UShort'];
  readonly id: Scalars['ID'];
  readonly startDateTime?: Maybe<Scalars['Long']>;
}

export interface Query {
  readonly __typename: 'Query';
  readonly games?: Maybe<ReadonlyArray<Maybe<IGameType>>>;
}


export interface QueryGamesArgs {
  ids: ReadonlyArray<InputMaybe<Scalars['Guid']>>;
  league: LeagueEnum;
}

export interface Subscription {
  readonly __typename: 'Subscription';
  readonly betCache?: Maybe<ReadonlyArray<BetMarketType>>;
}


export interface SubscriptionBetCacheArgs {
  request: InputBetCacheSubscriptionRequestType;
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

export interface UserMutationType {
  readonly __typename: 'UserMutationType';
  readonly token?: Maybe<TokenResponseType>;
}


export interface UserMutationTypeTokenArgs {
  refreshToken?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['Guid']>;
}

export type UserTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type UserTokenMutation = { readonly __typename: 'Mutation', readonly user?: { readonly __typename: 'UserMutationType', readonly token?: { readonly __typename: 'TokenResponseType', readonly accessToken: string } | null } | null };

export type GamesDataQueryVariables = Exact<{
  ids: ReadonlyArray<InputMaybe<Scalars['Guid']>> | InputMaybe<Scalars['Guid']>;
  league: LeagueEnum;
}>;


export type GamesDataQuery = { readonly __typename: 'Query', readonly games?: ReadonlyArray<{ readonly __typename: 'NBAGameType', readonly id: string, readonly awayTeam?: { readonly __typename: 'TeamType', readonly name: string } | null, readonly homeTeam?: { readonly __typename: 'TeamType', readonly name: string } | null } | { readonly __typename: 'NFLGameType', readonly id: string, readonly awayTeam?: { readonly __typename: 'TeamType', readonly name: string } | null, readonly homeTeam?: { readonly __typename: 'TeamType', readonly name: string } | null } | null> | null };

export type BetCacheSubscriptionVariables = Exact<{
  request: InputBetCacheSubscriptionRequestType;
}>;


export type BetCacheSubscription = { readonly __typename: 'Subscription', readonly betCache?: ReadonlyArray<{ readonly __typename: 'BetMarketType', readonly gameId: string }> | null };


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
export const GamesDataDocument = gql`
    query GamesData($ids: [Guid]!, $league: LeagueEnum!) {
  games(ids: $ids, league: $league) {
    ... on NBAGameType {
      id
      awayTeam {
        name
      }
      homeTeam {
        name
      }
    }
    ... on NFLGameType {
      id
      awayTeam {
        name
      }
      homeTeam {
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
  }
}
    `;
export function useBetCacheSubscription(baseOptions: Apollo.SubscriptionHookOptions<BetCacheSubscription, BetCacheSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<BetCacheSubscription, BetCacheSubscriptionVariables>(BetCacheDocument, options);
      }
export type BetCacheSubscriptionHookResult = ReturnType<typeof useBetCacheSubscription>;
export type BetCacheSubscriptionResult = Apollo.SubscriptionResult<BetCacheSubscription>;