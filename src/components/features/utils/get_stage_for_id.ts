import { type FeaturesStage, FeaturesStageID } from '../types'
import {
  FEATURES_STAGE_ONE,
  FEATURES_STAGE_TWO,
  FEATURES_STAGE_THREE
} from '../const'

const getStageForID = (id: string): FeaturesStage => {
  switch (id) {
    case FeaturesStageID.StageOne:
      return FEATURES_STAGE_ONE

    case FeaturesStageID.StageTwo:
      return FEATURES_STAGE_TWO

    case FeaturesStageID.StageThree:
      return FEATURES_STAGE_THREE

    default:
      return FEATURES_STAGE_ONE // TODO: Refactor to return null here
  }
}

export default getStageForID
