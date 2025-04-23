
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model answer
 * 
 */
export type answer = $Result.DefaultSelection<Prisma.$answerPayload>
/**
 * Model question
 * 
 */
export type question = $Result.DefaultSelection<Prisma.$questionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Answers
 * const answers = await prisma.answer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Answers
   * const answers = await prisma.answer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.answer`: Exposes CRUD operations for the **answer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Answers
    * const answers = await prisma.answer.findMany()
    * ```
    */
  get answer(): Prisma.answerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.questionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    answer: 'answer',
    question: 'question'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "answer" | "question"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      answer: {
        payload: Prisma.$answerPayload<ExtArgs>
        fields: Prisma.answerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.answerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.answerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>
          }
          findFirst: {
            args: Prisma.answerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.answerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>
          }
          findMany: {
            args: Prisma.answerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>[]
          }
          create: {
            args: Prisma.answerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>
          }
          createMany: {
            args: Prisma.answerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.answerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>
          }
          update: {
            args: Prisma.answerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>
          }
          deleteMany: {
            args: Prisma.answerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.answerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.answerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$answerPayload>
          }
          aggregate: {
            args: Prisma.AnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnswer>
          }
          groupBy: {
            args: Prisma.answerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.answerCountArgs<ExtArgs>
            result: $Utils.Optional<AnswerCountAggregateOutputType> | number
          }
        }
      }
      question: {
        payload: Prisma.$questionPayload<ExtArgs>
        fields: Prisma.questionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          findFirst: {
            args: Prisma.questionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          findMany: {
            args: Prisma.questionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>[]
          }
          create: {
            args: Prisma.questionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          createMany: {
            args: Prisma.questionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.questionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          update: {
            args: Prisma.questionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          deleteMany: {
            args: Prisma.questionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.questionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.questionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.questionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    answer?: answerOmit
    question?: questionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    answer: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | QuestionCountOutputTypeCountAnswerArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAnswerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model answer
   */

  export type AggregateAnswer = {
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  export type AnswerAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type AnswerSumAggregateOutputType = {
    id: number | null
    questionId: number | null
  }

  export type AnswerMinAggregateOutputType = {
    id: number | null
    questionId: number | null
    nama: string | null
    email: string | null
    nim: string | null
    answer_text: string | null
    preProcess_text: string | null
    sentiment: string | null
    created_at: Date | null
  }

  export type AnswerMaxAggregateOutputType = {
    id: number | null
    questionId: number | null
    nama: string | null
    email: string | null
    nim: string | null
    answer_text: string | null
    preProcess_text: string | null
    sentiment: string | null
    created_at: Date | null
  }

  export type AnswerCountAggregateOutputType = {
    id: number
    questionId: number
    nama: number
    email: number
    nim: number
    answer_text: number
    preProcess_text: number
    sentiment: number
    created_at: number
    _all: number
  }


  export type AnswerAvgAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type AnswerSumAggregateInputType = {
    id?: true
    questionId?: true
  }

  export type AnswerMinAggregateInputType = {
    id?: true
    questionId?: true
    nama?: true
    email?: true
    nim?: true
    answer_text?: true
    preProcess_text?: true
    sentiment?: true
    created_at?: true
  }

  export type AnswerMaxAggregateInputType = {
    id?: true
    questionId?: true
    nama?: true
    email?: true
    nim?: true
    answer_text?: true
    preProcess_text?: true
    sentiment?: true
    created_at?: true
  }

  export type AnswerCountAggregateInputType = {
    id?: true
    questionId?: true
    nama?: true
    email?: true
    nim?: true
    answer_text?: true
    preProcess_text?: true
    sentiment?: true
    created_at?: true
    _all?: true
  }

  export type AnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answer to aggregate.
     */
    where?: answerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answerOrderByWithRelationInput | answerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: answerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned answers
    **/
    _count?: true | AnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnswerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnswerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnswerMaxAggregateInputType
  }

  export type GetAnswerAggregateType<T extends AnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnswer[P]>
      : GetScalarType<T[P], AggregateAnswer[P]>
  }




  export type answerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: answerWhereInput
    orderBy?: answerOrderByWithAggregationInput | answerOrderByWithAggregationInput[]
    by: AnswerScalarFieldEnum[] | AnswerScalarFieldEnum
    having?: answerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnswerCountAggregateInputType | true
    _avg?: AnswerAvgAggregateInputType
    _sum?: AnswerSumAggregateInputType
    _min?: AnswerMinAggregateInputType
    _max?: AnswerMaxAggregateInputType
  }

  export type AnswerGroupByOutputType = {
    id: number
    questionId: number
    nama: string
    email: string
    nim: string
    answer_text: string
    preProcess_text: string | null
    sentiment: string | null
    created_at: Date
    _count: AnswerCountAggregateOutputType | null
    _avg: AnswerAvgAggregateOutputType | null
    _sum: AnswerSumAggregateOutputType | null
    _min: AnswerMinAggregateOutputType | null
    _max: AnswerMaxAggregateOutputType | null
  }

  type GetAnswerGroupByPayload<T extends answerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnswerGroupByOutputType[P]>
            : GetScalarType<T[P], AnswerGroupByOutputType[P]>
        }
      >
    >


  export type answerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    nama?: boolean
    email?: boolean
    nim?: boolean
    answer_text?: boolean
    preProcess_text?: boolean
    sentiment?: boolean
    created_at?: boolean
    question?: boolean | questionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["answer"]>



  export type answerSelectScalar = {
    id?: boolean
    questionId?: boolean
    nama?: boolean
    email?: boolean
    nim?: boolean
    answer_text?: boolean
    preProcess_text?: boolean
    sentiment?: boolean
    created_at?: boolean
  }

  export type answerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "questionId" | "nama" | "email" | "nim" | "answer_text" | "preProcess_text" | "sentiment" | "created_at", ExtArgs["result"]["answer"]>
  export type answerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | questionDefaultArgs<ExtArgs>
  }

  export type $answerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "answer"
    objects: {
      question: Prisma.$questionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      questionId: number
      nama: string
      email: string
      nim: string
      answer_text: string
      preProcess_text: string | null
      sentiment: string | null
      created_at: Date
    }, ExtArgs["result"]["answer"]>
    composites: {}
  }

  type answerGetPayload<S extends boolean | null | undefined | answerDefaultArgs> = $Result.GetResult<Prisma.$answerPayload, S>

  type answerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<answerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnswerCountAggregateInputType | true
    }

  export interface answerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['answer'], meta: { name: 'answer' } }
    /**
     * Find zero or one Answer that matches the filter.
     * @param {answerFindUniqueArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends answerFindUniqueArgs>(args: SelectSubset<T, answerFindUniqueArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Answer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {answerFindUniqueOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends answerFindUniqueOrThrowArgs>(args: SelectSubset<T, answerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answerFindFirstArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends answerFindFirstArgs>(args?: SelectSubset<T, answerFindFirstArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Answer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answerFindFirstOrThrowArgs} args - Arguments to find a Answer
     * @example
     * // Get one Answer
     * const answer = await prisma.answer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends answerFindFirstOrThrowArgs>(args?: SelectSubset<T, answerFindFirstOrThrowArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Answers
     * const answers = await prisma.answer.findMany()
     * 
     * // Get first 10 Answers
     * const answers = await prisma.answer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const answerWithIdOnly = await prisma.answer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends answerFindManyArgs>(args?: SelectSubset<T, answerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Answer.
     * @param {answerCreateArgs} args - Arguments to create a Answer.
     * @example
     * // Create one Answer
     * const Answer = await prisma.answer.create({
     *   data: {
     *     // ... data to create a Answer
     *   }
     * })
     * 
     */
    create<T extends answerCreateArgs>(args: SelectSubset<T, answerCreateArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Answers.
     * @param {answerCreateManyArgs} args - Arguments to create many Answers.
     * @example
     * // Create many Answers
     * const answer = await prisma.answer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends answerCreateManyArgs>(args?: SelectSubset<T, answerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Answer.
     * @param {answerDeleteArgs} args - Arguments to delete one Answer.
     * @example
     * // Delete one Answer
     * const Answer = await prisma.answer.delete({
     *   where: {
     *     // ... filter to delete one Answer
     *   }
     * })
     * 
     */
    delete<T extends answerDeleteArgs>(args: SelectSubset<T, answerDeleteArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Answer.
     * @param {answerUpdateArgs} args - Arguments to update one Answer.
     * @example
     * // Update one Answer
     * const answer = await prisma.answer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends answerUpdateArgs>(args: SelectSubset<T, answerUpdateArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Answers.
     * @param {answerDeleteManyArgs} args - Arguments to filter Answers to delete.
     * @example
     * // Delete a few Answers
     * const { count } = await prisma.answer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends answerDeleteManyArgs>(args?: SelectSubset<T, answerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Answers
     * const answer = await prisma.answer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends answerUpdateManyArgs>(args: SelectSubset<T, answerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Answer.
     * @param {answerUpsertArgs} args - Arguments to update or create a Answer.
     * @example
     * // Update or create a Answer
     * const answer = await prisma.answer.upsert({
     *   create: {
     *     // ... data to create a Answer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Answer we want to update
     *   }
     * })
     */
    upsert<T extends answerUpsertArgs>(args: SelectSubset<T, answerUpsertArgs<ExtArgs>>): Prisma__answerClient<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answerCountArgs} args - Arguments to filter Answers to count.
     * @example
     * // Count the number of Answers
     * const count = await prisma.answer.count({
     *   where: {
     *     // ... the filter for the Answers we want to count
     *   }
     * })
    **/
    count<T extends answerCountArgs>(
      args?: Subset<T, answerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnswerAggregateArgs>(args: Subset<T, AnswerAggregateArgs>): Prisma.PrismaPromise<GetAnswerAggregateType<T>>

    /**
     * Group by Answer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {answerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends answerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: answerGroupByArgs['orderBy'] }
        : { orderBy?: answerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, answerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the answer model
   */
  readonly fields: answerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for answer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__answerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends questionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questionDefaultArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the answer model
   */
  interface answerFieldRefs {
    readonly id: FieldRef<"answer", 'Int'>
    readonly questionId: FieldRef<"answer", 'Int'>
    readonly nama: FieldRef<"answer", 'String'>
    readonly email: FieldRef<"answer", 'String'>
    readonly nim: FieldRef<"answer", 'String'>
    readonly answer_text: FieldRef<"answer", 'String'>
    readonly preProcess_text: FieldRef<"answer", 'String'>
    readonly sentiment: FieldRef<"answer", 'String'>
    readonly created_at: FieldRef<"answer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * answer findUnique
   */
  export type answerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * Filter, which answer to fetch.
     */
    where: answerWhereUniqueInput
  }

  /**
   * answer findUniqueOrThrow
   */
  export type answerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * Filter, which answer to fetch.
     */
    where: answerWhereUniqueInput
  }

  /**
   * answer findFirst
   */
  export type answerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * Filter, which answer to fetch.
     */
    where?: answerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answerOrderByWithRelationInput | answerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answers.
     */
    cursor?: answerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * answer findFirstOrThrow
   */
  export type answerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * Filter, which answer to fetch.
     */
    where?: answerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answerOrderByWithRelationInput | answerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for answers.
     */
    cursor?: answerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of answers.
     */
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * answer findMany
   */
  export type answerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * Filter, which answers to fetch.
     */
    where?: answerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of answers to fetch.
     */
    orderBy?: answerOrderByWithRelationInput | answerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing answers.
     */
    cursor?: answerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` answers.
     */
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * answer create
   */
  export type answerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * The data needed to create a answer.
     */
    data: XOR<answerCreateInput, answerUncheckedCreateInput>
  }

  /**
   * answer createMany
   */
  export type answerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many answers.
     */
    data: answerCreateManyInput | answerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * answer update
   */
  export type answerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * The data needed to update a answer.
     */
    data: XOR<answerUpdateInput, answerUncheckedUpdateInput>
    /**
     * Choose, which answer to update.
     */
    where: answerWhereUniqueInput
  }

  /**
   * answer updateMany
   */
  export type answerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update answers.
     */
    data: XOR<answerUpdateManyMutationInput, answerUncheckedUpdateManyInput>
    /**
     * Filter which answers to update
     */
    where?: answerWhereInput
    /**
     * Limit how many answers to update.
     */
    limit?: number
  }

  /**
   * answer upsert
   */
  export type answerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * The filter to search for the answer to update in case it exists.
     */
    where: answerWhereUniqueInput
    /**
     * In case the answer found by the `where` argument doesn't exist, create a new answer with this data.
     */
    create: XOR<answerCreateInput, answerUncheckedCreateInput>
    /**
     * In case the answer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<answerUpdateInput, answerUncheckedUpdateInput>
  }

  /**
   * answer delete
   */
  export type answerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    /**
     * Filter which answer to delete.
     */
    where: answerWhereUniqueInput
  }

  /**
   * answer deleteMany
   */
  export type answerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which answers to delete
     */
    where?: answerWhereInput
    /**
     * Limit how many answers to delete.
     */
    limit?: number
  }

  /**
   * answer without action
   */
  export type answerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
  }


  /**
   * Model question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    question_text: string | null
    question_type: string | null
    created_at: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    question_text: string | null
    question_type: string | null
    created_at: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    question_text: number
    question_type: number
    created_at: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    question_text?: true
    question_type?: true
    created_at?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    question_text?: true
    question_type?: true
    created_at?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    question_text?: true
    question_type?: true
    created_at?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which question to aggregate.
     */
    where?: questionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionOrderByWithRelationInput | questionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type questionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questionWhereInput
    orderBy?: questionOrderByWithAggregationInput | questionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: questionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    question_text: string
    question_type: string
    created_at: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends questionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type questionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question_text?: boolean
    question_type?: boolean
    created_at?: boolean
    answer?: boolean | question$answerArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>



  export type questionSelectScalar = {
    id?: boolean
    question_text?: boolean
    question_type?: boolean
    created_at?: boolean
  }

  export type questionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question_text" | "question_type" | "created_at", ExtArgs["result"]["question"]>
  export type questionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answer?: boolean | question$answerArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $questionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "question"
    objects: {
      answer: Prisma.$answerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      question_text: string
      question_type: string
      created_at: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type questionGetPayload<S extends boolean | null | undefined | questionDefaultArgs> = $Result.GetResult<Prisma.$questionPayload, S>

  type questionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<questionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface questionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['question'], meta: { name: 'question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {questionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questionFindUniqueArgs>(args: SelectSubset<T, questionFindUniqueArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {questionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questionFindUniqueOrThrowArgs>(args: SelectSubset<T, questionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questionFindFirstArgs>(args?: SelectSubset<T, questionFindFirstArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questionFindFirstOrThrowArgs>(args?: SelectSubset<T, questionFindFirstOrThrowArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends questionFindManyArgs>(args?: SelectSubset<T, questionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {questionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends questionCreateArgs>(args: SelectSubset<T, questionCreateArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {questionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questionCreateManyArgs>(args?: SelectSubset<T, questionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {questionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends questionDeleteArgs>(args: SelectSubset<T, questionDeleteArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {questionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questionUpdateArgs>(args: SelectSubset<T, questionUpdateArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {questionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questionDeleteManyArgs>(args?: SelectSubset<T, questionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questionUpdateManyArgs>(args: SelectSubset<T, questionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {questionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends questionUpsertArgs>(args: SelectSubset<T, questionUpsertArgs<ExtArgs>>): Prisma__questionClient<$Result.GetResult<Prisma.$questionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends questionCountArgs>(
      args?: Subset<T, questionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends questionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questionGroupByArgs['orderBy'] }
        : { orderBy?: questionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, questionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the question model
   */
  readonly fields: questionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    answer<T extends question$answerArgs<ExtArgs> = {}>(args?: Subset<T, question$answerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$answerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the question model
   */
  interface questionFieldRefs {
    readonly id: FieldRef<"question", 'Int'>
    readonly question_text: FieldRef<"question", 'String'>
    readonly question_type: FieldRef<"question", 'String'>
    readonly created_at: FieldRef<"question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * question findUnique
   */
  export type questionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter, which question to fetch.
     */
    where: questionWhereUniqueInput
  }

  /**
   * question findUniqueOrThrow
   */
  export type questionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter, which question to fetch.
     */
    where: questionWhereUniqueInput
  }

  /**
   * question findFirst
   */
  export type questionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter, which question to fetch.
     */
    where?: questionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionOrderByWithRelationInput | questionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * question findFirstOrThrow
   */
  export type questionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter, which question to fetch.
     */
    where?: questionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionOrderByWithRelationInput | questionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questions.
     */
    cursor?: questionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * question findMany
   */
  export type questionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter, which questions to fetch.
     */
    where?: questionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questions to fetch.
     */
    orderBy?: questionOrderByWithRelationInput | questionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing questions.
     */
    cursor?: questionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * question create
   */
  export type questionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * The data needed to create a question.
     */
    data: XOR<questionCreateInput, questionUncheckedCreateInput>
  }

  /**
   * question createMany
   */
  export type questionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many questions.
     */
    data: questionCreateManyInput | questionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * question update
   */
  export type questionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * The data needed to update a question.
     */
    data: XOR<questionUpdateInput, questionUncheckedUpdateInput>
    /**
     * Choose, which question to update.
     */
    where: questionWhereUniqueInput
  }

  /**
   * question updateMany
   */
  export type questionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update questions.
     */
    data: XOR<questionUpdateManyMutationInput, questionUncheckedUpdateManyInput>
    /**
     * Filter which questions to update
     */
    where?: questionWhereInput
    /**
     * Limit how many questions to update.
     */
    limit?: number
  }

  /**
   * question upsert
   */
  export type questionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * The filter to search for the question to update in case it exists.
     */
    where: questionWhereUniqueInput
    /**
     * In case the question found by the `where` argument doesn't exist, create a new question with this data.
     */
    create: XOR<questionCreateInput, questionUncheckedCreateInput>
    /**
     * In case the question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questionUpdateInput, questionUncheckedUpdateInput>
  }

  /**
   * question delete
   */
  export type questionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
    /**
     * Filter which question to delete.
     */
    where: questionWhereUniqueInput
  }

  /**
   * question deleteMany
   */
  export type questionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questions to delete
     */
    where?: questionWhereInput
    /**
     * Limit how many questions to delete.
     */
    limit?: number
  }

  /**
   * question.answer
   */
  export type question$answerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the answer
     */
    select?: answerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the answer
     */
    omit?: answerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: answerInclude<ExtArgs> | null
    where?: answerWhereInput
    orderBy?: answerOrderByWithRelationInput | answerOrderByWithRelationInput[]
    cursor?: answerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnswerScalarFieldEnum | AnswerScalarFieldEnum[]
  }

  /**
   * question without action
   */
  export type questionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the question
     */
    select?: questionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the question
     */
    omit?: questionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AnswerScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    nama: 'nama',
    email: 'email',
    nim: 'nim',
    answer_text: 'answer_text',
    preProcess_text: 'preProcess_text',
    sentiment: 'sentiment',
    created_at: 'created_at'
  };

  export type AnswerScalarFieldEnum = (typeof AnswerScalarFieldEnum)[keyof typeof AnswerScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    question_text: 'question_text',
    question_type: 'question_type',
    created_at: 'created_at'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const answerOrderByRelevanceFieldEnum: {
    nama: 'nama',
    email: 'email',
    nim: 'nim',
    answer_text: 'answer_text',
    preProcess_text: 'preProcess_text',
    sentiment: 'sentiment'
  };

  export type answerOrderByRelevanceFieldEnum = (typeof answerOrderByRelevanceFieldEnum)[keyof typeof answerOrderByRelevanceFieldEnum]


  export const questionOrderByRelevanceFieldEnum: {
    question_text: 'question_text',
    question_type: 'question_type'
  };

  export type questionOrderByRelevanceFieldEnum = (typeof questionOrderByRelevanceFieldEnum)[keyof typeof questionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type answerWhereInput = {
    AND?: answerWhereInput | answerWhereInput[]
    OR?: answerWhereInput[]
    NOT?: answerWhereInput | answerWhereInput[]
    id?: IntFilter<"answer"> | number
    questionId?: IntFilter<"answer"> | number
    nama?: StringFilter<"answer"> | string
    email?: StringFilter<"answer"> | string
    nim?: StringFilter<"answer"> | string
    answer_text?: StringFilter<"answer"> | string
    preProcess_text?: StringNullableFilter<"answer"> | string | null
    sentiment?: StringNullableFilter<"answer"> | string | null
    created_at?: DateTimeFilter<"answer"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, questionWhereInput>
  }

  export type answerOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    nim?: SortOrder
    answer_text?: SortOrder
    preProcess_text?: SortOrderInput | SortOrder
    sentiment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    question?: questionOrderByWithRelationInput
    _relevance?: answerOrderByRelevanceInput
  }

  export type answerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: answerWhereInput | answerWhereInput[]
    OR?: answerWhereInput[]
    NOT?: answerWhereInput | answerWhereInput[]
    questionId?: IntFilter<"answer"> | number
    nama?: StringFilter<"answer"> | string
    email?: StringFilter<"answer"> | string
    nim?: StringFilter<"answer"> | string
    answer_text?: StringFilter<"answer"> | string
    preProcess_text?: StringNullableFilter<"answer"> | string | null
    sentiment?: StringNullableFilter<"answer"> | string | null
    created_at?: DateTimeFilter<"answer"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, questionWhereInput>
  }, "id">

  export type answerOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    nim?: SortOrder
    answer_text?: SortOrder
    preProcess_text?: SortOrderInput | SortOrder
    sentiment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: answerCountOrderByAggregateInput
    _avg?: answerAvgOrderByAggregateInput
    _max?: answerMaxOrderByAggregateInput
    _min?: answerMinOrderByAggregateInput
    _sum?: answerSumOrderByAggregateInput
  }

  export type answerScalarWhereWithAggregatesInput = {
    AND?: answerScalarWhereWithAggregatesInput | answerScalarWhereWithAggregatesInput[]
    OR?: answerScalarWhereWithAggregatesInput[]
    NOT?: answerScalarWhereWithAggregatesInput | answerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"answer"> | number
    questionId?: IntWithAggregatesFilter<"answer"> | number
    nama?: StringWithAggregatesFilter<"answer"> | string
    email?: StringWithAggregatesFilter<"answer"> | string
    nim?: StringWithAggregatesFilter<"answer"> | string
    answer_text?: StringWithAggregatesFilter<"answer"> | string
    preProcess_text?: StringNullableWithAggregatesFilter<"answer"> | string | null
    sentiment?: StringNullableWithAggregatesFilter<"answer"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"answer"> | Date | string
  }

  export type questionWhereInput = {
    AND?: questionWhereInput | questionWhereInput[]
    OR?: questionWhereInput[]
    NOT?: questionWhereInput | questionWhereInput[]
    id?: IntFilter<"question"> | number
    question_text?: StringFilter<"question"> | string
    question_type?: StringFilter<"question"> | string
    created_at?: DateTimeFilter<"question"> | Date | string
    answer?: AnswerListRelationFilter
  }

  export type questionOrderByWithRelationInput = {
    id?: SortOrder
    question_text?: SortOrder
    question_type?: SortOrder
    created_at?: SortOrder
    answer?: answerOrderByRelationAggregateInput
    _relevance?: questionOrderByRelevanceInput
  }

  export type questionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: questionWhereInput | questionWhereInput[]
    OR?: questionWhereInput[]
    NOT?: questionWhereInput | questionWhereInput[]
    question_text?: StringFilter<"question"> | string
    question_type?: StringFilter<"question"> | string
    created_at?: DateTimeFilter<"question"> | Date | string
    answer?: AnswerListRelationFilter
  }, "id">

  export type questionOrderByWithAggregationInput = {
    id?: SortOrder
    question_text?: SortOrder
    question_type?: SortOrder
    created_at?: SortOrder
    _count?: questionCountOrderByAggregateInput
    _avg?: questionAvgOrderByAggregateInput
    _max?: questionMaxOrderByAggregateInput
    _min?: questionMinOrderByAggregateInput
    _sum?: questionSumOrderByAggregateInput
  }

  export type questionScalarWhereWithAggregatesInput = {
    AND?: questionScalarWhereWithAggregatesInput | questionScalarWhereWithAggregatesInput[]
    OR?: questionScalarWhereWithAggregatesInput[]
    NOT?: questionScalarWhereWithAggregatesInput | questionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"question"> | number
    question_text?: StringWithAggregatesFilter<"question"> | string
    question_type?: StringWithAggregatesFilter<"question"> | string
    created_at?: DateTimeWithAggregatesFilter<"question"> | Date | string
  }

  export type answerCreateInput = {
    nama: string
    email: string
    nim: string
    answer_text: string
    preProcess_text?: string | null
    sentiment?: string | null
    created_at?: Date | string
    question: questionCreateNestedOneWithoutAnswerInput
  }

  export type answerUncheckedCreateInput = {
    id?: number
    questionId: number
    nama: string
    email: string
    nim: string
    answer_text: string
    preProcess_text?: string | null
    sentiment?: string | null
    created_at?: Date | string
  }

  export type answerUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    answer_text?: StringFieldUpdateOperationsInput | string
    preProcess_text?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: questionUpdateOneRequiredWithoutAnswerNestedInput
  }

  export type answerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    answer_text?: StringFieldUpdateOperationsInput | string
    preProcess_text?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type answerCreateManyInput = {
    id?: number
    questionId: number
    nama: string
    email: string
    nim: string
    answer_text: string
    preProcess_text?: string | null
    sentiment?: string | null
    created_at?: Date | string
  }

  export type answerUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    answer_text?: StringFieldUpdateOperationsInput | string
    preProcess_text?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type answerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    questionId?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    answer_text?: StringFieldUpdateOperationsInput | string
    preProcess_text?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionCreateInput = {
    question_text: string
    question_type?: string
    created_at?: Date | string
    answer?: answerCreateNestedManyWithoutQuestionInput
  }

  export type questionUncheckedCreateInput = {
    id?: number
    question_text: string
    question_type?: string
    created_at?: Date | string
    answer?: answerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type questionUpdateInput = {
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: answerUpdateManyWithoutQuestionNestedInput
  }

  export type questionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    answer?: answerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type questionCreateManyInput = {
    id?: number
    question_text: string
    question_type?: string
    created_at?: Date | string
  }

  export type questionUpdateManyMutationInput = {
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type QuestionScalarRelationFilter = {
    is?: questionWhereInput
    isNot?: questionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type answerOrderByRelevanceInput = {
    fields: answerOrderByRelevanceFieldEnum | answerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type answerCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    nim?: SortOrder
    answer_text?: SortOrder
    preProcess_text?: SortOrder
    sentiment?: SortOrder
    created_at?: SortOrder
  }

  export type answerAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type answerMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    nim?: SortOrder
    answer_text?: SortOrder
    preProcess_text?: SortOrder
    sentiment?: SortOrder
    created_at?: SortOrder
  }

  export type answerMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    nim?: SortOrder
    answer_text?: SortOrder
    preProcess_text?: SortOrder
    sentiment?: SortOrder
    created_at?: SortOrder
  }

  export type answerSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AnswerListRelationFilter = {
    every?: answerWhereInput
    some?: answerWhereInput
    none?: answerWhereInput
  }

  export type answerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type questionOrderByRelevanceInput = {
    fields: questionOrderByRelevanceFieldEnum | questionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type questionCountOrderByAggregateInput = {
    id?: SortOrder
    question_text?: SortOrder
    question_type?: SortOrder
    created_at?: SortOrder
  }

  export type questionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type questionMaxOrderByAggregateInput = {
    id?: SortOrder
    question_text?: SortOrder
    question_type?: SortOrder
    created_at?: SortOrder
  }

  export type questionMinOrderByAggregateInput = {
    id?: SortOrder
    question_text?: SortOrder
    question_type?: SortOrder
    created_at?: SortOrder
  }

  export type questionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type questionCreateNestedOneWithoutAnswerInput = {
    create?: XOR<questionCreateWithoutAnswerInput, questionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: questionCreateOrConnectWithoutAnswerInput
    connect?: questionWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type questionUpdateOneRequiredWithoutAnswerNestedInput = {
    create?: XOR<questionCreateWithoutAnswerInput, questionUncheckedCreateWithoutAnswerInput>
    connectOrCreate?: questionCreateOrConnectWithoutAnswerInput
    upsert?: questionUpsertWithoutAnswerInput
    connect?: questionWhereUniqueInput
    update?: XOR<XOR<questionUpdateToOneWithWhereWithoutAnswerInput, questionUpdateWithoutAnswerInput>, questionUncheckedUpdateWithoutAnswerInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type answerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<answerCreateWithoutQuestionInput, answerUncheckedCreateWithoutQuestionInput> | answerCreateWithoutQuestionInput[] | answerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: answerCreateOrConnectWithoutQuestionInput | answerCreateOrConnectWithoutQuestionInput[]
    createMany?: answerCreateManyQuestionInputEnvelope
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
  }

  export type answerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<answerCreateWithoutQuestionInput, answerUncheckedCreateWithoutQuestionInput> | answerCreateWithoutQuestionInput[] | answerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: answerCreateOrConnectWithoutQuestionInput | answerCreateOrConnectWithoutQuestionInput[]
    createMany?: answerCreateManyQuestionInputEnvelope
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
  }

  export type answerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<answerCreateWithoutQuestionInput, answerUncheckedCreateWithoutQuestionInput> | answerCreateWithoutQuestionInput[] | answerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: answerCreateOrConnectWithoutQuestionInput | answerCreateOrConnectWithoutQuestionInput[]
    upsert?: answerUpsertWithWhereUniqueWithoutQuestionInput | answerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: answerCreateManyQuestionInputEnvelope
    set?: answerWhereUniqueInput | answerWhereUniqueInput[]
    disconnect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    delete?: answerWhereUniqueInput | answerWhereUniqueInput[]
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    update?: answerUpdateWithWhereUniqueWithoutQuestionInput | answerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: answerUpdateManyWithWhereWithoutQuestionInput | answerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: answerScalarWhereInput | answerScalarWhereInput[]
  }

  export type answerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<answerCreateWithoutQuestionInput, answerUncheckedCreateWithoutQuestionInput> | answerCreateWithoutQuestionInput[] | answerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: answerCreateOrConnectWithoutQuestionInput | answerCreateOrConnectWithoutQuestionInput[]
    upsert?: answerUpsertWithWhereUniqueWithoutQuestionInput | answerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: answerCreateManyQuestionInputEnvelope
    set?: answerWhereUniqueInput | answerWhereUniqueInput[]
    disconnect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    delete?: answerWhereUniqueInput | answerWhereUniqueInput[]
    connect?: answerWhereUniqueInput | answerWhereUniqueInput[]
    update?: answerUpdateWithWhereUniqueWithoutQuestionInput | answerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: answerUpdateManyWithWhereWithoutQuestionInput | answerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: answerScalarWhereInput | answerScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type questionCreateWithoutAnswerInput = {
    question_text: string
    question_type?: string
    created_at?: Date | string
  }

  export type questionUncheckedCreateWithoutAnswerInput = {
    id?: number
    question_text: string
    question_type?: string
    created_at?: Date | string
  }

  export type questionCreateOrConnectWithoutAnswerInput = {
    where: questionWhereUniqueInput
    create: XOR<questionCreateWithoutAnswerInput, questionUncheckedCreateWithoutAnswerInput>
  }

  export type questionUpsertWithoutAnswerInput = {
    update: XOR<questionUpdateWithoutAnswerInput, questionUncheckedUpdateWithoutAnswerInput>
    create: XOR<questionCreateWithoutAnswerInput, questionUncheckedCreateWithoutAnswerInput>
    where?: questionWhereInput
  }

  export type questionUpdateToOneWithWhereWithoutAnswerInput = {
    where?: questionWhereInput
    data: XOR<questionUpdateWithoutAnswerInput, questionUncheckedUpdateWithoutAnswerInput>
  }

  export type questionUpdateWithoutAnswerInput = {
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type questionUncheckedUpdateWithoutAnswerInput = {
    id?: IntFieldUpdateOperationsInput | number
    question_text?: StringFieldUpdateOperationsInput | string
    question_type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type answerCreateWithoutQuestionInput = {
    nama: string
    email: string
    nim: string
    answer_text: string
    preProcess_text?: string | null
    sentiment?: string | null
    created_at?: Date | string
  }

  export type answerUncheckedCreateWithoutQuestionInput = {
    id?: number
    nama: string
    email: string
    nim: string
    answer_text: string
    preProcess_text?: string | null
    sentiment?: string | null
    created_at?: Date | string
  }

  export type answerCreateOrConnectWithoutQuestionInput = {
    where: answerWhereUniqueInput
    create: XOR<answerCreateWithoutQuestionInput, answerUncheckedCreateWithoutQuestionInput>
  }

  export type answerCreateManyQuestionInputEnvelope = {
    data: answerCreateManyQuestionInput | answerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type answerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: answerWhereUniqueInput
    update: XOR<answerUpdateWithoutQuestionInput, answerUncheckedUpdateWithoutQuestionInput>
    create: XOR<answerCreateWithoutQuestionInput, answerUncheckedCreateWithoutQuestionInput>
  }

  export type answerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: answerWhereUniqueInput
    data: XOR<answerUpdateWithoutQuestionInput, answerUncheckedUpdateWithoutQuestionInput>
  }

  export type answerUpdateManyWithWhereWithoutQuestionInput = {
    where: answerScalarWhereInput
    data: XOR<answerUpdateManyMutationInput, answerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type answerScalarWhereInput = {
    AND?: answerScalarWhereInput | answerScalarWhereInput[]
    OR?: answerScalarWhereInput[]
    NOT?: answerScalarWhereInput | answerScalarWhereInput[]
    id?: IntFilter<"answer"> | number
    questionId?: IntFilter<"answer"> | number
    nama?: StringFilter<"answer"> | string
    email?: StringFilter<"answer"> | string
    nim?: StringFilter<"answer"> | string
    answer_text?: StringFilter<"answer"> | string
    preProcess_text?: StringNullableFilter<"answer"> | string | null
    sentiment?: StringNullableFilter<"answer"> | string | null
    created_at?: DateTimeFilter<"answer"> | Date | string
  }

  export type answerCreateManyQuestionInput = {
    id?: number
    nama: string
    email: string
    nim: string
    answer_text: string
    preProcess_text?: string | null
    sentiment?: string | null
    created_at?: Date | string
  }

  export type answerUpdateWithoutQuestionInput = {
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    answer_text?: StringFieldUpdateOperationsInput | string
    preProcess_text?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type answerUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    answer_text?: StringFieldUpdateOperationsInput | string
    preProcess_text?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type answerUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nim?: StringFieldUpdateOperationsInput | string
    answer_text?: StringFieldUpdateOperationsInput | string
    preProcess_text?: NullableStringFieldUpdateOperationsInput | string | null
    sentiment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}