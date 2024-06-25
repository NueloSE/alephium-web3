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
  EventSubscribeOptions,
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
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
} from "@alephium/web3";
import { default as DebugContractJson } from "../test/Debug.ral.json";
import { getContractByCodeHash } from "./contracts";
import {
  AddStruct1,
  AddStruct2,
  Balances,
  MapValue,
  TokenBalance,
  AllStructs,
} from "./types";

// Custom types for the contract
export namespace DebugTypes {
  export type State = Omit<ContractState<any>, "fields">;

  export interface CallMethodTable {
    debug: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<null>;
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

  export interface SignExecuteMethodTable {
    debug: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<DebugInstance, {}> {
  encodeFields() {
    return encodeContractFields({}, this.contract.fieldsSig, AllStructs);
  }

  at(address: string): DebugInstance {
    return new DebugInstance(address);
  }

  tests = {
    debug: async (
      params?: Omit<
        TestContractParamsWithoutMaps<never, never>,
        "testArgs" | "initialFields"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(
        this,
        "debug",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };
}

// Use this object to test and deploy the contract
export const Debug = new Factory(
  Contract.fromJson(
    DebugContractJson,
    "=4-2+18=11-1+3=10+ca7e020748656c6c6f2c200121",
    "eb4209d8f543d9f623d72578f7ed9b271d62cf396dcce42d10f5e68dba3cecd3",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class DebugInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<DebugTypes.State> {
    return fetchContractState(Debug, this);
  }

  view = {
    debug: async (
      params?: DebugTypes.CallMethodParams<"debug">
    ): Promise<DebugTypes.CallMethodResult<"debug">> => {
      return callMethod(
        Debug,
        this,
        "debug",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    debug: async (
      params: DebugTypes.SignExecuteMethodParams<"debug">
    ): Promise<DebugTypes.SignExecuteMethodResult<"debug">> => {
      return signExecuteMethod(Debug, this, "debug", params);
    },
  };
}
