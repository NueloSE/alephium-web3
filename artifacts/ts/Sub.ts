/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  SubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as SubContractJson } from "../sub/sub.ral.json";

// Custom types for the contract
export namespace SubTypes {
  export type Fields = {
    result: bigint;
  };

  export type State = ContractState<Fields>;

  export type SubEvent = ContractEvent<{ x: bigint; y: bigint }>;

  export interface CallMethodTable {
    sub: {
      params: CallContractParams<{ array: [bigint, bigint] }>;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<SubInstance, SubTypes.Fields> {
  at(address: string): SubInstance {
    return new SubInstance(address);
  }

  tests = {
    sub: async (
      params: TestContractParams<SubTypes.Fields, { array: [bigint, bigint] }>
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "sub", params);
    },
  };
}

// Use this object to test and deploy the contract
export const Sub = new Factory(
  Contract.fromJson(
    SubContractJson,
    "",
    "513645f5c95a28d55a51070f3d5c51edbda05a98f46b23cad59952e2ee4846a1"
  )
);

// Use this class to interact with the blockchain
export class SubInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<SubTypes.State> {
    return fetchContractState(Sub, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeSubEvent(
    options: SubscribeOptions<SubTypes.SubEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      Sub.contract,
      this,
      options,
      "Sub",
      fromCount
    );
  }

  methods = {
    sub: async (
      params: SubTypes.CallMethodParams<"sub">
    ): Promise<SubTypes.CallMethodResult<"sub">> => {
      return callMethod(Sub, this, "sub", params);
    },
  };

  async multicall<Calls extends SubTypes.MultiCallParams>(
    calls: Calls
  ): Promise<SubTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      Sub,
      this,
      calls
    )) as SubTypes.MultiCallResults<Calls>;
  }
}
