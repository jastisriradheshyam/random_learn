# Exec


## Streaming output

### Example 1

```go
cmd := exec.Command(command, args...)
cmd.Stdout = os.Stdout
cmd.Stderr = os.Stderr
err = cmd.Start()
if err != nil {
  fmt.Println("Error:", err)
  return
}
err = cmd.Wait()
if err != nil {
  fmt.Println("Command finished with error:", err)
  return
}
```

### Example 2

```go
cmd := exec.Command(command, args...)

stdoutPipe, err := cmd.StdoutPipe()
if err != nil {
  fmt.Println("Error:", err)
  return
}
stderrPipe, err := cmd.StderrPipe()
if err != nil {
  fmt.Println("Error:", err)
  return
}

err = cmd.Start()
if err != nil {
  fmt.Println("Error:", err)
  return
}

oneRuneStdout := make([]byte, utf8.UTFMax)
for {
  count, err := stdoutPipe.Read(oneRuneStdout)
  if err != nil {
    break
  }
  fmt.Printf("%s", oneRuneStdout[:count])
}
oneRuneStderr := make([]byte, utf8.UTFMax)
for {
  count, err := stderrPipe.Read(oneRuneStderr)
  if err != nil {
    break
  }
  fmt.Printf("%s", oneRuneStderr[:count])
}

err = cmd.Wait()
if err != nil {
  fmt.Println("Command finished with error:", err)
  return
}
```

## Buffered output at once

### Example 1 (Combined output)

```go
cmd := exec.Command(command, args...)

err = cmd.Start()
if err != nil {
  fmt.Println("Error:", err)
  return
}
combinedOutput, err := cmd.CombinedOutput()
if err != nil {
	fmt.Println("Error:", err)
	return
}
err = cmd.Wait()
if err != nil {
  fmt.Println("Command finished with error:", err)
  return
}
fmt.Println(string(combinedOutput))
```

### Example 2 (Separate output)

```go
cmd := exec.Command(command, args...)
err = cmd.Start()
if err != nil {
  fmt.Println("Error:", err)
  return
}
// Read stdout
stdout, err := ioutil.ReadAll(stdoutPipe)
if err != nil {
fmt.Println("Error reading stdout:", err)
return
}

// Read stderr
stderr, err := ioutil.ReadAll(stderrPipe)
if err != nil {
fmt.Println("Error reading stderr:", err)
return
}

err = cmd.Wait()
if err != nil {
  fmt.Println("Command finished with error:", err)
  return
}

// Print stdout and stderr
fmt.Println("Stdout:", string(stdout))
fmt.Println("Stderr:", string(stderr))
```