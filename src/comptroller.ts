import {
  NewPendingImplementation as NewPendingImplementationEvent,
  NewImplementation as NewImplementationEvent,
  NewPendingAdmin as NewPendingAdminEvent,
  NewAdmin as NewAdminEvent,
  Failure as FailureEvent,
  MarketListed as MarketListedEvent,
  MarketEntered as MarketEnteredEvent,
  MarketExited as MarketExitedEvent,
  NewCloseFactor as NewCloseFactorEvent,
  NewCollateralFactor as NewCollateralFactorEvent,
  NewLiquidationIncentive as NewLiquidationIncentiveEvent,
  NewMaxAssets as NewMaxAssetsEvent,
  NewPriceOracle as NewPriceOracleEvent,
  Failure1 as Failure1Event
} from "../generated/Comptroller/Comptroller"
import {
  NewPendingImplementation,
  NewImplementation,
  NewPendingAdmin,
  NewAdmin,
  Failure,
  MarketListed,
  MarketEntered,
  MarketExited,
  NewCloseFactor,
  NewCollateralFactor,
  NewLiquidationIncentive,
  NewMaxAssets,
  NewPriceOracle,
  Failure1
} from "../generated/schema"

export function handleNewPendingImplementation(
  event: NewPendingImplementationEvent
): void {
  let entity = new NewPendingImplementation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldPendingImplementation = event.params.oldPendingImplementation
  entity.newPendingImplementation = event.params.newPendingImplementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewImplementation(event: NewImplementationEvent): void {
  let entity = new NewImplementation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewPendingAdmin(event: NewPendingAdminEvent): void {
  let entity = new NewPendingAdmin(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewAdmin(event: NewAdminEvent): void {
  let entity = new NewAdmin(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFailure(event: FailureEvent): void {
  let entity = new Failure(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketListed(event: MarketListedEvent): void {
  let entity = new MarketListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.cToken = event.params.cToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketEntered(event: MarketEnteredEvent): void {
  let entity = new MarketEntered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.cToken = event.params.cToken
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketExited(event: MarketExitedEvent): void {
  let entity = new MarketExited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.cToken = event.params.cToken
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewCloseFactor(event: NewCloseFactorEvent): void {
  let entity = new NewCloseFactor(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldCloseFactorMantissa = event.params.oldCloseFactorMantissa
  entity.newCloseFactorMantissa = event.params.newCloseFactorMantissa

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewCollateralFactor(
  event: NewCollateralFactorEvent
): void {
  let entity = new NewCollateralFactor(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.cToken = event.params.cToken
  entity.oldCollateralFactorMantissa = event.params.oldCollateralFactorMantissa
  entity.newCollateralFactorMantissa = event.params.newCollateralFactorMantissa

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewLiquidationIncentive(
  event: NewLiquidationIncentiveEvent
): void {
  let entity = new NewLiquidationIncentive(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldLiquidationIncentiveMantissa =
    event.params.oldLiquidationIncentiveMantissa
  entity.newLiquidationIncentiveMantissa =
    event.params.newLiquidationIncentiveMantissa

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewMaxAssets(event: NewMaxAssetsEvent): void {
  let entity = new NewMaxAssets(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldMaxAssets = event.params.oldMaxAssets
  entity.newMaxAssets = event.params.newMaxAssets

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewPriceOracle(event: NewPriceOracleEvent): void {
  let entity = new NewPriceOracle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldPriceOracle = event.params.oldPriceOracle
  entity.newPriceOracle = event.params.newPriceOracle

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFailure1(event: Failure1Event): void {
  let entity = new Failure1(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
