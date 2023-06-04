# CPU Branch Prediction

- Branch predictions are a way to optimize conditional operations where we predict the conditional output and prepare the result for block of code under the predicted condition
- In languages with `jump` statement like `C`, branch prediction and preparation of code becomes difficult, hence it is encouraged to use standard conditional statements like `if..else`, etc.


## ARM

- https://developer.arm.com/documentation/ddi0338/g/prefetch-unit/branch-prediction