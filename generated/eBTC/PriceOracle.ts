// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class PriceOracle extends ethereum.SmartContract {
  static bind(address: Address): PriceOracle {
    return new PriceOracle("PriceOracle", address);
  }

  Oracles(param0: Bytes): Address {
    let result = super.call("Oracles", "Oracles(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);

    return result[0].toAddress();
  }

  try_Oracles(param0: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall("Oracles", "Oracles(bytes32):(address)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getUnderlyingDecimals(ctoken: Address): BigInt {
    let result = super.call(
      "getUnderlyingDecimals",
      "getUnderlyingDecimals(address):(uint256)",
      [ethereum.Value.fromAddress(ctoken)]
    );

    return result[0].toBigInt();
  }

  try_getUnderlyingDecimals(ctoken: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUnderlyingDecimals",
      "getUnderlyingDecimals(address):(uint256)",
      [ethereum.Value.fromAddress(ctoken)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getUnderlyingPrice(ctoken: Address): BigInt {
    let result = super.call(
      "getUnderlyingPrice",
      "getUnderlyingPrice(address):(uint256)",
      [ethereum.Value.fromAddress(ctoken)]
    );

    return result[0].toBigInt();
  }

  try_getUnderlyingPrice(ctoken: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getUnderlyingPrice",
      "getUnderlyingPrice(address):(uint256)",
      [ethereum.Value.fromAddress(ctoken)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}