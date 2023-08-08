import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/Comptroller/Comptroller"

export function createNewPendingImplementationEvent(
  oldPendingImplementation: Address,
  newPendingImplementation: Address
): NewPendingImplementation {
  let newPendingImplementationEvent = changetype<NewPendingImplementation>(
    newMockEvent()
  )

  newPendingImplementationEvent.parameters = new Array()

  newPendingImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingImplementation",
      ethereum.Value.fromAddress(oldPendingImplementation)
    )
  )
  newPendingImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingImplementation",
      ethereum.Value.fromAddress(newPendingImplementation)
    )
  )

  return newPendingImplementationEvent
}

export function createNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): NewImplementation {
  let newImplementationEvent = changetype<NewImplementation>(newMockEvent())

  newImplementationEvent.parameters = new Array()

  newImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  newImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return newImplementationEvent
}

export function createNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): NewPendingAdmin {
  let newPendingAdminEvent = changetype<NewPendingAdmin>(newMockEvent())

  newPendingAdminEvent.parameters = new Array()

  newPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  newPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return newPendingAdminEvent
}

export function createNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): NewAdmin {
  let newAdminEvent = changetype<NewAdmin>(newMockEvent())

  newAdminEvent.parameters = new Array()

  newAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  newAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return newAdminEvent
}

export function createFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): Failure {
  let failureEvent = changetype<Failure>(newMockEvent())

  failureEvent.parameters = new Array()

  failureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  failureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  failureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return failureEvent
}

export function createMarketListedEvent(cToken: Address): MarketListed {
  let marketListedEvent = changetype<MarketListed>(newMockEvent())

  marketListedEvent.parameters = new Array()

  marketListedEvent.parameters.push(
    new ethereum.EventParam("cToken", ethereum.Value.fromAddress(cToken))
  )

  return marketListedEvent
}

export function createMarketEnteredEvent(
  cToken: Address,
  account: Address
): MarketEntered {
  let marketEnteredEvent = changetype<MarketEntered>(newMockEvent())

  marketEnteredEvent.parameters = new Array()

  marketEnteredEvent.parameters.push(
    new ethereum.EventParam("cToken", ethereum.Value.fromAddress(cToken))
  )
  marketEnteredEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return marketEnteredEvent
}

export function createMarketExitedEvent(
  cToken: Address,
  account: Address
): MarketExited {
  let marketExitedEvent = changetype<MarketExited>(newMockEvent())

  marketExitedEvent.parameters = new Array()

  marketExitedEvent.parameters.push(
    new ethereum.EventParam("cToken", ethereum.Value.fromAddress(cToken))
  )
  marketExitedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return marketExitedEvent
}

export function createNewCloseFactorEvent(
  oldCloseFactorMantissa: BigInt,
  newCloseFactorMantissa: BigInt
): NewCloseFactor {
  let newCloseFactorEvent = changetype<NewCloseFactor>(newMockEvent())

  newCloseFactorEvent.parameters = new Array()

  newCloseFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldCloseFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldCloseFactorMantissa)
    )
  )
  newCloseFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newCloseFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newCloseFactorMantissa)
    )
  )

  return newCloseFactorEvent
}

export function createNewCollateralFactorEvent(
  cToken: Address,
  oldCollateralFactorMantissa: BigInt,
  newCollateralFactorMantissa: BigInt
): NewCollateralFactor {
  let newCollateralFactorEvent = changetype<NewCollateralFactor>(newMockEvent())

  newCollateralFactorEvent.parameters = new Array()

  newCollateralFactorEvent.parameters.push(
    new ethereum.EventParam("cToken", ethereum.Value.fromAddress(cToken))
  )
  newCollateralFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldCollateralFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldCollateralFactorMantissa)
    )
  )
  newCollateralFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newCollateralFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newCollateralFactorMantissa)
    )
  )

  return newCollateralFactorEvent
}

export function createNewLiquidationIncentiveEvent(
  oldLiquidationIncentiveMantissa: BigInt,
  newLiquidationIncentiveMantissa: BigInt
): NewLiquidationIncentive {
  let newLiquidationIncentiveEvent = changetype<NewLiquidationIncentive>(
    newMockEvent()
  )

  newLiquidationIncentiveEvent.parameters = new Array()

  newLiquidationIncentiveEvent.parameters.push(
    new ethereum.EventParam(
      "oldLiquidationIncentiveMantissa",
      ethereum.Value.fromUnsignedBigInt(oldLiquidationIncentiveMantissa)
    )
  )
  newLiquidationIncentiveEvent.parameters.push(
    new ethereum.EventParam(
      "newLiquidationIncentiveMantissa",
      ethereum.Value.fromUnsignedBigInt(newLiquidationIncentiveMantissa)
    )
  )

  return newLiquidationIncentiveEvent
}

export function createNewMaxAssetsEvent(
  oldMaxAssets: BigInt,
  newMaxAssets: BigInt
): NewMaxAssets {
  let newMaxAssetsEvent = changetype<NewMaxAssets>(newMockEvent())

  newMaxAssetsEvent.parameters = new Array()

  newMaxAssetsEvent.parameters.push(
    new ethereum.EventParam(
      "oldMaxAssets",
      ethereum.Value.fromUnsignedBigInt(oldMaxAssets)
    )
  )
  newMaxAssetsEvent.parameters.push(
    new ethereum.EventParam(
      "newMaxAssets",
      ethereum.Value.fromUnsignedBigInt(newMaxAssets)
    )
  )

  return newMaxAssetsEvent
}

export function createNewPriceOracleEvent(
  oldPriceOracle: Address,
  newPriceOracle: Address
): NewPriceOracle {
  let newPriceOracleEvent = changetype<NewPriceOracle>(newMockEvent())

  newPriceOracleEvent.parameters = new Array()

  newPriceOracleEvent.parameters.push(
    new ethereum.EventParam(
      "oldPriceOracle",
      ethereum.Value.fromAddress(oldPriceOracle)
    )
  )
  newPriceOracleEvent.parameters.push(
    new ethereum.EventParam(
      "newPriceOracle",
      ethereum.Value.fromAddress(newPriceOracle)
    )
  )

  return newPriceOracleEvent
}

export function createFailure1Event(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): Failure1 {
  let failure1Event = changetype<Failure1>(newMockEvent())

  failure1Event.parameters = new Array()

  failure1Event.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  failure1Event.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  failure1Event.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return failure1Event
}
