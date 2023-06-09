# goroutines

- Has it's own call stack
- one thread can have multiple goroutines
- dynamically multiplexed on multiple threads


## Channels

- By default synchronous (wait for next input until previously sent value in the channel is consumed)

### Declaring and initializing
```
var c chan int
c = make(chan int)
// or

c := make(chan int)
```

### Sending on a channel
```
c <- 1
```

### Receiving from a channel
```
value = <-c
```

### Buffered channels

- Go channels can also be created with a buffer, buffering removes synchronization

## Patterns

### Generator

```go
func main() {
	c := boring("boring!") // Function returning a channel
	for i := 0; i < 5; i++ {
		fmt.Printf("You say: %q\n", <-c)
	}
	fmt.Println("You're boring; I'm leaving")
}

func boring(msg string) <-chan string {
	c := make(chan string)
	go func() {
		for i := 0; ; i++ {
			c <- fmt.Sprintf("%s %d", msg, i)
			time.Sleep(time.Duration(rand.Intn(1e3)) * time.Millisecond)
		}
	}()
	return c
}
```

two channels in synchronous manner

```go
func main() {
  joe := boring("Joe")
  ann := boring("Ann")
  for i := 0; i < 5; i++ {
    fmt.Println(<-joe)
    fmt.Println(<-ann)
  }
  fmt.Println("You're both boring; I'm leaving.")
}
```

### Multiplexing
both channels are combined into single channel to access, but both can send input channel independently.
```go
func fanIn(input1, input2 <-chan string) <-chan string {
  c := make(chan string)
  go func() { for { c <- <- input1 }}()
  go func() { for { c <- <- input2 }}()
  return c
}

func main() {
  c := fanIn(boring("Joe"), boring("Ann"))
  for i := 0; i < 10; i++ {
    fmt.Println(<-c)
  }
  fmt.Println("You're both boring; I'm leaving.")
}
```

<!-- TODO: Add More patterns -->

## References

- [Google I/O 2012 - Go Concurrency Patterns - YouTube](https://www.youtube.com/watch?v=f6kdp27TYZs)