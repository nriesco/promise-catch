# How to properly use a sequence of promise/catch

Examples on sequences that fail but seem to be ok

## Running

`node index.js`


## Sample output

```
## EXAMPLE 1: in.txt contents
## EXAMPLE 2: ENOENT: no such file or directory, open '/path/to/promise-catch/in-not.txt'
## EXAMPLE 3 - Final report:  Fail on step #4: Fail on step #3: Fail on step #2: Fail on step #1: ENOENT: no such file or directory, open '/path/to/promise-catch/in-not.txt'
## EXAMPLE 4 - Final report:  Fail on step #4: undefined
```
