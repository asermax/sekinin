import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "tasks" */
  delete_tasks?: Maybe<Tasks_Mutation_Response>;
  /** delete single row from the table: "tasks" */
  delete_tasks_by_pk?: Maybe<Tasks>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "tasks" */
  insert_tasks?: Maybe<Tasks_Mutation_Response>;
  /** insert a single row into the table: "tasks" */
  insert_tasks_one?: Maybe<Tasks>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "tasks" */
  update_tasks?: Maybe<Tasks_Mutation_Response>;
  /** update single row of the table: "tasks" */
  update_tasks_by_pk?: Maybe<Tasks>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_TasksArgs = {
  where: Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tasks_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_TasksArgs = {
  objects: Array<Tasks_Insert_Input>;
  on_conflict?: InputMaybe<Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tasks_OneArgs = {
  object: Tasks_Insert_Input;
  on_conflict?: InputMaybe<Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TasksArgs = {
  _inc?: InputMaybe<Tasks_Inc_Input>;
  _set?: InputMaybe<Tasks_Set_Input>;
  where: Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tasks_By_PkArgs = {
  _inc?: InputMaybe<Tasks_Inc_Input>;
  _set?: InputMaybe<Tasks_Set_Input>;
  pk_columns: Tasks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  tasks: Array<Tasks>;
  /** An aggregate relationship */
  tasks_aggregate: Tasks_Aggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootTasksArgs = {
  distinct_on?: InputMaybe<Array<Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tasks_Order_By>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};


export type Query_RootTasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tasks_Order_By>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};


export type Query_RootTasks_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  tasks: Array<Tasks>;
  /** An aggregate relationship */
  tasks_aggregate: Tasks_Aggregate;
  /** fetch data from the table: "tasks" using primary key columns */
  tasks_by_pk?: Maybe<Tasks>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootTasksArgs = {
  distinct_on?: InputMaybe<Array<Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tasks_Order_By>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};


export type Subscription_RootTasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tasks_Order_By>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};


export type Subscription_RootTasks_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "tasks" */
export type Tasks = {
  __typename?: 'tasks';
  created_at: Scalars['timestamptz'];
  done: Scalars['Boolean'];
  id: Scalars['Int'];
  text: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user: Scalars['Int'];
};

/** aggregated selection of "tasks" */
export type Tasks_Aggregate = {
  __typename?: 'tasks_aggregate';
  aggregate?: Maybe<Tasks_Aggregate_Fields>;
  nodes: Array<Tasks>;
};

/** aggregate fields of "tasks" */
export type Tasks_Aggregate_Fields = {
  __typename?: 'tasks_aggregate_fields';
  avg?: Maybe<Tasks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tasks_Max_Fields>;
  min?: Maybe<Tasks_Min_Fields>;
  stddev?: Maybe<Tasks_Stddev_Fields>;
  stddev_pop?: Maybe<Tasks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tasks_Stddev_Samp_Fields>;
  sum?: Maybe<Tasks_Sum_Fields>;
  var_pop?: Maybe<Tasks_Var_Pop_Fields>;
  var_samp?: Maybe<Tasks_Var_Samp_Fields>;
  variance?: Maybe<Tasks_Variance_Fields>;
};


/** aggregate fields of "tasks" */
export type Tasks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tasks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tasks" */
export type Tasks_Aggregate_Order_By = {
  avg?: InputMaybe<Tasks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tasks_Max_Order_By>;
  min?: InputMaybe<Tasks_Min_Order_By>;
  stddev?: InputMaybe<Tasks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Tasks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Tasks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Tasks_Sum_Order_By>;
  var_pop?: InputMaybe<Tasks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Tasks_Var_Samp_Order_By>;
  variance?: InputMaybe<Tasks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tasks" */
export type Tasks_Arr_Rel_Insert_Input = {
  data: Array<Tasks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tasks_On_Conflict>;
};

/** aggregate avg on columns */
export type Tasks_Avg_Fields = {
  __typename?: 'tasks_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tasks" */
export type Tasks_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tasks". All fields are combined with a logical 'AND'. */
export type Tasks_Bool_Exp = {
  _and?: InputMaybe<Array<Tasks_Bool_Exp>>;
  _not?: InputMaybe<Tasks_Bool_Exp>;
  _or?: InputMaybe<Array<Tasks_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  done?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "tasks" */
export enum Tasks_Constraint {
  /** unique or primary key constraint */
  TasksPkey = 'tasks_pkey'
}

/** input type for incrementing numeric columns in table "tasks" */
export type Tasks_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "tasks" */
export type Tasks_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  done?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Tasks_Max_Fields = {
  __typename?: 'tasks_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "tasks" */
export type Tasks_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tasks_Min_Fields = {
  __typename?: 'tasks_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "tasks" */
export type Tasks_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tasks" */
export type Tasks_Mutation_Response = {
  __typename?: 'tasks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tasks>;
};

/** on_conflict condition type for table "tasks" */
export type Tasks_On_Conflict = {
  constraint: Tasks_Constraint;
  update_columns?: Array<Tasks_Update_Column>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};

/** Ordering options when selecting data from "tasks". */
export type Tasks_Order_By = {
  created_at?: InputMaybe<Order_By>;
  done?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** primary key columns input for table: tasks */
export type Tasks_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "tasks" */
export enum Tasks_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Done = 'done',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "tasks" */
export type Tasks_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  done?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  text?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Tasks_Stddev_Fields = {
  __typename?: 'tasks_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tasks" */
export type Tasks_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tasks_Stddev_Pop_Fields = {
  __typename?: 'tasks_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tasks" */
export type Tasks_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tasks_Stddev_Samp_Fields = {
  __typename?: 'tasks_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tasks" */
export type Tasks_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Tasks_Sum_Fields = {
  __typename?: 'tasks_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tasks" */
export type Tasks_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** update columns of table "tasks" */
export enum Tasks_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Done = 'done',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  User = 'user'
}

/** aggregate var_pop on columns */
export type Tasks_Var_Pop_Fields = {
  __typename?: 'tasks_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tasks" */
export type Tasks_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tasks_Var_Samp_Fields = {
  __typename?: 'tasks_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tasks" */
export type Tasks_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Tasks_Variance_Fields = {
  __typename?: 'tasks_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tasks" */
export type Tasks_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  auth0Id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  tasks: Array<Tasks>;
  /** An aggregate relationship */
  tasks_aggregate: Tasks_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "users" */
export type UsersTasksArgs = {
  distinct_on?: InputMaybe<Array<Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tasks_Order_By>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersTasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tasks_Order_By>>;
  where?: InputMaybe<Tasks_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  auth0Id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  tasks?: InputMaybe<Tasks_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UserAuth0IdKey = 'user_auth0Id_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  auth0Id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  tasks?: InputMaybe<Tasks_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  auth0Id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  auth0Id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  auth0Id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tasks_aggregate?: InputMaybe<Tasks_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Auth0Id = 'auth0Id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  auth0Id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Auth0Id = 'auth0Id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type CommonTaskFieldsFragment = { __typename?: 'tasks', id: number, text: string, done: boolean };

export type GetTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTasksQuery = { __typename?: 'query_root', tasks: Array<{ __typename?: 'tasks', id: number, text: string, done: boolean }> };

export type CreateTaskMutationVariables = Exact<{
  text: Scalars['String'];
}>;


export type CreateTaskMutation = { __typename?: 'mutation_root', insert_tasks_one?: { __typename?: 'tasks', id: number, text: string, done: boolean } | null };

export type MarkTaskAsDoneMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MarkTaskAsDoneMutation = { __typename?: 'mutation_root', update_tasks_by_pk?: { __typename?: 'tasks', id: number, text: string, done: boolean } | null };

export type MarkTaskAsNotDoneMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type MarkTaskAsNotDoneMutation = { __typename?: 'mutation_root', update_tasks_by_pk?: { __typename?: 'tasks', id: number, text: string, done: boolean } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: number, email: string }> };

export const CommonTaskFieldsFragmentDoc = gql`
    fragment commonTaskFields on tasks {
  id
  text
  done
}
    `;
export const GetTasksDocument = gql`
    query getTasks {
  tasks(order_by: {updated_at: desc}) {
    ...commonTaskFields
  }
}
    ${CommonTaskFieldsFragmentDoc}`;
export const CreateTaskDocument = gql`
    mutation createTask($text: String!) {
  insert_tasks_one(object: {text: $text}) {
    ...commonTaskFields
  }
}
    ${CommonTaskFieldsFragmentDoc}`;
export const MarkTaskAsDoneDocument = gql`
    mutation markTaskAsDone($id: Int!) {
  update_tasks_by_pk(pk_columns: {id: $id}, _set: {done: true}) {
    ...commonTaskFields
  }
}
    ${CommonTaskFieldsFragmentDoc}`;
export const MarkTaskAsNotDoneDocument = gql`
    mutation markTaskAsNotDone($id: Int!) {
  update_tasks_by_pk(pk_columns: {id: $id}, _set: {done: false}) {
    ...commonTaskFields
  }
}
    ${CommonTaskFieldsFragmentDoc}`;
export const GetUsersDocument = gql`
    query getUsers {
  users {
    id
    email
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getTasks(variables?: GetTasksQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTasksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTasksQuery>(GetTasksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTasks', 'query');
    },
    createTask(variables: CreateTaskMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateTaskMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTaskMutation>(CreateTaskDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createTask', 'mutation');
    },
    markTaskAsDone(variables: MarkTaskAsDoneMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MarkTaskAsDoneMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MarkTaskAsDoneMutation>(MarkTaskAsDoneDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'markTaskAsDone', 'mutation');
    },
    markTaskAsNotDone(variables: MarkTaskAsNotDoneMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MarkTaskAsNotDoneMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MarkTaskAsNotDoneMutation>(MarkTaskAsNotDoneDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'markTaskAsNotDone', 'mutation');
    },
    getUsers(variables?: GetUsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersQuery>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsers', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;