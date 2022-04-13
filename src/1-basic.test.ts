class stringConcat{
   static concat(a: string, b: string){
        return a + b;
   }
}

it("should-verify-the-string-concatenation", function () {
    //Arrange
    var string1 = "Unit testing is";
    var string2 = "powerful";
    var expected = "Unit testing is powerful";
    
    //Act
    var result = stringConcat.concat(string1, string2);
    
    //Assert
    expect(result).toBe(expected);
});


