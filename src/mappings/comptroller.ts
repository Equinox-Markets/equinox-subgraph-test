/* eslint-disable prefer-const */ // to satisfy AS compiler

import {
  MarketEntered,
  MarketExited,
  NewCloseFactor,
  NewCollateralFactor,
  NewLiquidationIncentive,
  NewMaxAssets,
  NewPriceOracle,
} from '../../generated/Comptroller/Comptroller'

import { Market, Comptroller } from '../../generated/schema'
import { mantissaFactorBD, updateCommonCTokenStats } from './helpers'

export function handleMarketEntered(event: MarketEntered): void {
  let market = Market.load(event.params.cToken.toHexString())
  if (market == null) {
    return
  }
  let accountID = event.params.account.toHex()
  let cTokenStats = updateCommonCTokenStats(
    market.id,
    market.symbol,
    accountID,
    event.transaction.hash,
    event.block.timestamp.toI32(),
    event.block.number.toI32(),
  )
  cTokenStats.enteredMarket = true
  cTokenStats.save()
}

export function handleMarketExited(event: MarketExited): void {
  let market = Market.load(event.params.cToken.toHexString())
  if (market == null) {
    return
  }
  let accountID = event.params.account.toHex()
  let cTokenStats = updateCommonCTokenStats(
    market.id,
    market.symbol,
    accountID,
    event.transaction.hash,
    event.block.timestamp.toI32(),
    event.block.number.toI32(),
  )
  cTokenStats.enteredMarket = false
  cTokenStats.save()
}

export function handleNewCloseFactor(event: NewCloseFactor): void {
  let comptroller = Comptroller.load('1')
  if (comptroller == null) {
    return
  }
  comptroller.closeFactor = event.params.newCloseFactorMantissa
  comptroller.save()
}

export function handleNewCollateralFactor(event: NewCollateralFactor): void {
  let market = Market.load(event.params.cToken.toHexString())
  if (market == null) {
    return
  }
  market.collateralFactor = event.params.newCollateralFactorMantissa
    .toBigDecimal()
    .div(mantissaFactorBD)
  market.save()
}

// This should be the first event acccording to etherscan but it isn't.... price oracle is. weird
export function handleNewLiquidationIncentive(event: NewLiquidationIncentive): void {
  let comptroller = Comptroller.load('1')
  if (comptroller == null) {
    return
  }
  comptroller.liquidationIncentive = event.params.newLiquidationIncentiveMantissa
  comptroller.save()
}

export function handleNewMaxAssets(event: NewMaxAssets): void {
  let comptroller = Comptroller.load('1')
  if (comptroller == null) {
    return
  }
  comptroller.maxAssets = event.params.newMaxAssets
  comptroller.save()
}

export function handleNewPriceOracle(event: NewPriceOracle): void {
  let comptroller = Comptroller.load('1')
  // This is the first event used in this mapping, so we use it to create the entity
  if (comptroller == null) {
    comptroller = new Comptroller('1')
  }
  comptroller.priceOracle = event.params.newPriceOracle
  comptroller.save()
}
