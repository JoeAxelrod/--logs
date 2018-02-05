
# --logs!

Enough mess, we're 2018. **Afraid of heaps of server logs?** You're right. But what will you do when you need them, and a lot of them?

If you think that crying is not an option, and also go back to 1998 not in an option then ...


```sh
$ node index --logs
$ pm2 start index
```


# Just do it


See the config.js file. Your eyes come out of holes when you discover how simple our solutions are, sometimes


So simple:

![diagram](graph.png)



```mermaid
graph LR
A[$ node index] -- --logs ? --> B(console.log = console.log)
A --  non ? --> C(console.log = function)
B --> D((Life is not so bad))
C --> D
```