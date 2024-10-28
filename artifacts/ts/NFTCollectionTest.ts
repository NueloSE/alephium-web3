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
  Asset,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
  Narrow,
} from "@alephium/web3";
import { default as NFTCollectionTestContractJson } from "../nft/NFTCollectionTest.ral.json";
import { getContractByCodeHash, registerContract } from "./contracts";
import {
  AddStruct1,
  AddStruct2,
  Balances,
  MapValue,
  TokenBalance,
  AllStructs,
} from "./types";

// Custom types for the contract
export namespace NFTCollectionTestTypes {
  export type Fields = {
    nftTemplateId: HexString;
    collectionUri: HexString;
    totalSupply: bigint;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getCollectionUri: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    totalSupply: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    nftByIndex: {
      params: CallContractParams<{ index: bigint }>;
      result: CallContractResult<HexString>;
    };
    validateNFT: {
      params: CallContractParams<{ nftId: HexString; nftIndex: bigint }>;
      result: CallContractResult<null>;
    };
    mint: {
      params: CallContractParams<{ nftUri: HexString }>;
      result: CallContractResult<HexString>;
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
  export type MulticallReturnType<Callss extends MultiCallParams[]> = {
    [index in keyof Callss]: MultiCallResults<Callss[index]>;
  };

  export interface SignExecuteMethodTable {
    getCollectionUri: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    totalSupply: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    nftByIndex: {
      params: SignExecuteContractMethodParams<{ index: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    validateNFT: {
      params: SignExecuteContractMethodParams<{
        nftId: HexString;
        nftIndex: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    mint: {
      params: SignExecuteContractMethodParams<{ nftUri: HexString }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  NFTCollectionTestInstance,
  NFTCollectionTestTypes.Fields
> {
  encodeFields(fields: NFTCollectionTestTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  at(address: string): NFTCollectionTestInstance {
    return new NFTCollectionTestInstance(address);
  }

  tests = {
    getCollectionUri: async (
      params: Omit<
        TestContractParamsWithoutMaps<NFTCollectionTestTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(
        this,
        "getCollectionUri",
        params,
        getContractByCodeHash
      );
    },
    totalSupply: async (
      params: Omit<
        TestContractParamsWithoutMaps<NFTCollectionTestTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "totalSupply", params, getContractByCodeHash);
    },
    nftByIndex: async (
      params: TestContractParamsWithoutMaps<
        NFTCollectionTestTypes.Fields,
        { index: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "nftByIndex", params, getContractByCodeHash);
    },
    validateNFT: async (
      params: TestContractParamsWithoutMaps<
        NFTCollectionTestTypes.Fields,
        { nftId: HexString; nftIndex: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "validateNFT", params, getContractByCodeHash);
    },
    mint: async (
      params: TestContractParamsWithoutMaps<
        NFTCollectionTestTypes.Fields,
        { nftUri: HexString }
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "mint", params, getContractByCodeHash);
    },
  };

  stateForTest(
    initFields: NFTCollectionTestTypes.Fields,
    asset?: Asset,
    address?: string
  ) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const NFTCollectionTest = new Factory(
  Contract.fromJson(
    NFTCollectionTestContractJson,
    "",
    "087f9292bb326a4d39a6fac09928cb25edf2837718f830f3a166a937f8724779",
    AllStructs
  )
);
registerContract(NFTCollectionTest);

// Use this class to interact with the blockchain
export class NFTCollectionTestInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<NFTCollectionTestTypes.State> {
    return fetchContractState(NFTCollectionTest, this);
  }

  view = {
    getCollectionUri: async (
      params?: NFTCollectionTestTypes.CallMethodParams<"getCollectionUri">
    ): Promise<NFTCollectionTestTypes.CallMethodResult<"getCollectionUri">> => {
      return callMethod(
        NFTCollectionTest,
        this,
        "getCollectionUri",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    totalSupply: async (
      params?: NFTCollectionTestTypes.CallMethodParams<"totalSupply">
    ): Promise<NFTCollectionTestTypes.CallMethodResult<"totalSupply">> => {
      return callMethod(
        NFTCollectionTest,
        this,
        "totalSupply",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    nftByIndex: async (
      params: NFTCollectionTestTypes.CallMethodParams<"nftByIndex">
    ): Promise<NFTCollectionTestTypes.CallMethodResult<"nftByIndex">> => {
      return callMethod(
        NFTCollectionTest,
        this,
        "nftByIndex",
        params,
        getContractByCodeHash
      );
    },
    validateNFT: async (
      params: NFTCollectionTestTypes.CallMethodParams<"validateNFT">
    ): Promise<NFTCollectionTestTypes.CallMethodResult<"validateNFT">> => {
      return callMethod(
        NFTCollectionTest,
        this,
        "validateNFT",
        params,
        getContractByCodeHash
      );
    },
    mint: async (
      params: NFTCollectionTestTypes.CallMethodParams<"mint">
    ): Promise<NFTCollectionTestTypes.CallMethodResult<"mint">> => {
      return callMethod(
        NFTCollectionTest,
        this,
        "mint",
        params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    getCollectionUri: async (
      params: NFTCollectionTestTypes.SignExecuteMethodParams<"getCollectionUri">
    ): Promise<
      NFTCollectionTestTypes.SignExecuteMethodResult<"getCollectionUri">
    > => {
      return signExecuteMethod(
        NFTCollectionTest,
        this,
        "getCollectionUri",
        params
      );
    },
    totalSupply: async (
      params: NFTCollectionTestTypes.SignExecuteMethodParams<"totalSupply">
    ): Promise<
      NFTCollectionTestTypes.SignExecuteMethodResult<"totalSupply">
    > => {
      return signExecuteMethod(NFTCollectionTest, this, "totalSupply", params);
    },
    nftByIndex: async (
      params: NFTCollectionTestTypes.SignExecuteMethodParams<"nftByIndex">
    ): Promise<
      NFTCollectionTestTypes.SignExecuteMethodResult<"nftByIndex">
    > => {
      return signExecuteMethod(NFTCollectionTest, this, "nftByIndex", params);
    },
    validateNFT: async (
      params: NFTCollectionTestTypes.SignExecuteMethodParams<"validateNFT">
    ): Promise<
      NFTCollectionTestTypes.SignExecuteMethodResult<"validateNFT">
    > => {
      return signExecuteMethod(NFTCollectionTest, this, "validateNFT", params);
    },
    mint: async (
      params: NFTCollectionTestTypes.SignExecuteMethodParams<"mint">
    ): Promise<NFTCollectionTestTypes.SignExecuteMethodResult<"mint">> => {
      return signExecuteMethod(NFTCollectionTest, this, "mint", params);
    },
  };

  async multicall<Calls extends NFTCollectionTestTypes.MultiCallParams>(
    calls: Calls
  ): Promise<NFTCollectionTestTypes.MultiCallResults<Calls>>;
  async multicall<Callss extends NFTCollectionTestTypes.MultiCallParams[]>(
    callss: Narrow<Callss>
  ): Promise<NFTCollectionTestTypes.MulticallReturnType<Callss>>;
  async multicall<
    Callss extends
      | NFTCollectionTestTypes.MultiCallParams
      | NFTCollectionTestTypes.MultiCallParams[]
  >(callss: Callss): Promise<unknown> {
    return await multicallMethods(
      NFTCollectionTest,
      this,
      callss,
      getContractByCodeHash
    );
  }
}
