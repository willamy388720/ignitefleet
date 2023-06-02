import { createRealmContext } from "@realm/react";

import { Historic } from "./schemas/Historic";

const realmAcsessBehavior: Realm.OpenRealmBehaviorConfiguration = {
  type: Realm.OpenRealmBehaviorType.OpenImmediately,
};

export const syncConfig: any = {
  flexible: true,
  newRealmFileBehavior: realmAcsessBehavior,
  existingRealmFileBehavior: realmAcsessBehavior,
};

export const { RealmProvider, useRealm, useQuery, useObject } =
  createRealmContext({
    schema: [Historic],
  });
