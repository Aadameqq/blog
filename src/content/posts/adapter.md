---
title: Adapter
keywords: adapter, design pattern, design, pattern, oop, object oriented programming, java
categorySlug: design-patterns
date: 20.08.2023
description: This is a summary of the knowledge I acquired while learning about the Adapter pattern.
---

Adapter is a **design pattern** that **converts one interface into another**. It's like an adapter that allows us to plug the European plug into US socket.
The adapter pattern is mainly used when we cannot change the plug or socket implementation.

<img 
src="/blog/images/posts/adapter/diagram.png" 
alt="Diagram showing the structure of the adapter pattern"
style="max-width:800px"
/>
Blue arrow - implements

White arrow - uses

## Example

Imagine that you have developed an application that uses a database library. After a few years, the library's author releases a new version with a new interface that is incompatible with the older versions. While you would like to use the updated version, you do not want to rewrite the existing code. Using the latest version only in new code seems like a great idea. But what if you would need to use existing class that uses the older interface in new code? Adapter pattern solves this issue.

### Code

```java
public class UserRepository { // Existing code

    private final OldDatabase db;

    public UserRepository(OldDatabase db){
        this.db = db;
    }

    public void createUser(String username){
        this.db.runQuery("some query");
    }
}

public interface NewDatabase { // Interface of the latest version of database library
     void executeQuery(String query);
}

public interface OldDatabase { // Interface of the older version of database library
    void runQuery(String sql);
}
```

Now let’s create adapter

```java
public class NewDatabaseToOldDatabaseAdapter implements OldDatabase{

    private final NewDatabase newDatabase;

    public NewDatabaseToOldDatabaseAdapter(NewDatabase newDatabase){
        this.newDatabase = newDatabase;
    }

    @Override
    public void runQuery(String sql) {
        this.newDatabase.executeQuery(sql);
    }
}
```

The adapter implements the interface that we want to convert our interface to. It also uses the interface of the converted class so as not to be tied to a specific implementation.

Here you can see the usage of adapter.
```java
    NewDatabase newDb = new NewDatabaseImpl();
    OldDatabase adapted = new NewDatabaseToOldDatabaseAdapter(newDb);
    UserRepository repositoryWithAdapted = new UserRepository(adapted);
```
The entire working code can be found [here](https://github.com/Aadameqq/design-patterns-java/tree/master/src/main/java/adapter)
