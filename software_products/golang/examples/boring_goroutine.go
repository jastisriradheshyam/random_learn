package main

import (
	fmt "fmt"
	time "time"
	rand "math/rand"
)

func main() {
	c := make(chan string)
	go boring("boring!", c)
	for i := 0; i < 5; i++ {
		fmt.Printf("You say: %q\n", <-c) // receiving
	}
	fmt.Println("You're boring; I'm leaving")
}

func boring(msg string, c chan string) {
	for i := 0; ;i++ {
		c <- fmt.Sprintf("%s %d", msg, i) // Exporting
		time.Sleep(time.Duration(rand.Intn(1e3)) * time.Millisecond)
	}
}