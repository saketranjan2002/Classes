# Boring official defination
ORM stands for Object-Relational Mapping, a programming technique used in software development to convert data between incompatible type systems in object-oriented programming languages. This technique creates a "virtual object database" that can be used from within the programming language.
ORMs are used to abstract the complexities of the underlying database into simpler, more easily managed objects within the code

# Easier to digest defination
ORMs let you easily interact with your database without worrying too much about the underlying syntax (SQL language for eg)





# why ORM?
1. Simpler syntax (converts objects to SQL queries under the hood)
2. Abstraction that lets you flip the database you are using. Unified API irrespective of the DB
3. Type safety/Auto completion
4. Automatic migrations -> In case of a simple Postgres app, it’s very hard to keep track of all the commands that were ran that led to the current schema of the table.