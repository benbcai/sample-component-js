console.log('*********Outside "describe" block in test*********');
describeWithFormFactors('describe block', ['small', 'large'], () => {
  console.log('*********Inside "describe" block in test*********');
  it('should log message', () => {
    console.log('*********Inside "it" block in test*********');
  })
})
