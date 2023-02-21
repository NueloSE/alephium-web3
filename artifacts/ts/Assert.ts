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
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as AssertContractJson } from "../test/assert.ral.json";

// Custom types for the contract
export namespace AssertTypes {
  export type State = Omit<ContractState<any>, "fields">;
}

class Factory extends ContractFactory<AssertInstance, {}> {
  at(address: string): AssertInstance {
    return new AssertInstance(address);
  }

  async testTestMethod(
    params?: Omit<
      TestContractParams<never, never>,
      "testArgs" | "initialFields"
    >
  ): Promise<TestContractResult<null>> {
    return testMethod(this, "test", params === undefined ? {} : params);
  }
}

// Use this object to test and deploy the contract
export const Assert = new Factory(
  Contract.fromJson(
    AssertContractJson,
    "",
    "5bd05924fb9a23ea105df065a8c2dfa463b9ee53cc14a60320140d19dd6151ca"
  )
);

// Use this class to interact with the blockchain
export class AssertInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<AssertTypes.State> {
    return fetchContractState(Assert, this);
  }
}
