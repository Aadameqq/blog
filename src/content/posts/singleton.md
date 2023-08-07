---
title: Singleton
keywords: singleton, design pattern, design, pattern, oop, object oriented programming
categorySlug: design-patterns
date: 06.08.2023
description: This is a summary of the knowledge I acquired while learning about the Singleton pattern.
---

Singleton is a **design pattern** that provides us with the ability to limit the class instances to one.
It also provides **global access to the instance**.
It ensures that there is **only one instance of a class** in the whole app and
can increase the performance of our app if
there are some classes that can be instantiated once and the same instance can be used anywhere. 
Singleton is also good for containing shared and global state.

## Implementation
```ts
class Singleton {
    private static instance:Singleton;
    private constructor() {
        // some code
    }
    public static getInstance(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    // other methods
}
```
Access to the constructor is restricted to ensure that no one can create more than one instance. 
To get the instance, an external class uses `getInstance` static method, which creates new instance only if there is no instance.
```ts
class Main{
    method(){
        const singletonInstance = Singleton.getInstance();
        singletonInstance.fn()
    }
}
```
We could create one instance at the beginning
```ts
class Singleton {
    private static instance = new Singleton();

    private constructor() {
        // some code
    }

    public static getInstance() {
        return Singleton.instance;
    }
}
```
but the first implementation creates the instance only when it is needed, which may improve performance.

## Example of usage

### Database connection pool management

Singleton pattern is really useful when we want to limit database connections and reuse existing ones.
Without Singleton, we would have to pass connection object to every class that requires a database connection.

```ts
class Database {
    private static instance: Database;

    private freeConnections: Connection[] = [];
    private inUseConnections: Connection[] = [];
    private totalConnections = 5;

    private constructor() {
        for (let i = 0; i < this.totalConnections; i++) {
            this.freeConnections.push(new Connection());
        }
    }

    public static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public getConnection() {
        const connection = this.freeConnections.pop();
        if(!connection){
            return this.waitForFreeConnection()
        }
        this.inUseConnections.push(connection);
        return connection;
    }

    private waitForFreeConnection(){
        // implementation
    }

    public releaseConnection(connection: Connection) {
        if (this.inUseConnections.indexOf(connection) === -1) {
            throw new Error("Given connection does not exist in this pool")
        }
        this.inUseConnections = this.inUseConnections.filter(con => con !== connection);
        this.freeConnections.push(connection);
    }
}
```
The entire working code can be found [here](https://github.com/Aadameqq/design-patterns/blob/main/patterns/singleton/main.ts).





