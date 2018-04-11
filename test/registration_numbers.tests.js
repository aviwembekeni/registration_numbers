describe('AddRegNum', function() {

    it('should return list of registration numbers', function() {
      var addRegNum = AddRegNum();

      addRegNum.addRegistrationNo("CA 123");
      addRegNum.addRegistrationNo("CJ 345");
      addRegNum.addRegistrationNo("CY 123");

      assert.deepEqual({CA123: 0, CJ 345: 0, CY 123: CY 123}, greet.getRegistrationNos());
    });
});
