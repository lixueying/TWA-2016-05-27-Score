describe('score', function(){

    it('should return the rank C when score is 50', function(){
        var result = getRank(50);
        var expectResult = "D";

        expect(result).toEqual(expectResult);
    });

    it('should return the rank D when score is 60', function(){
        var result = getRank(60);
        var expectResult = "C";

        expect(result).toEqual(expectResult);
    });

    it('should return the rank B when score is 88', function(){
        var result = getRank(88);
        var expectResult = "B";

        expect(result).toEqual(expectResult);
    });

    it('should return the rank A when score is 99', function(){
        var result = getRank(99);
        var expectResult = "A";

        expect(result).toEqual(expectResult);
    });
});