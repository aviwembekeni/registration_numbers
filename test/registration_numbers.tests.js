describe('AddRegNum', function() {

    it('should return list of registration numbers.', function() {
      var addRegNum = AddRegNum();

      addRegNum.addRegistrationNo("CA 123");
      addRegNum.addRegistrationNo("CJ 345");
      addRegNum.addRegistrationNo("CY 123");

      assert.deepEqual({"CA 123": 0, "CJ 345": 0, "CY 123": 0}, addRegNum.getRegistrationNos());
    });

    it('should return return true if registration number starts with CA.', function() {
      var addRegNum = AddRegNum();

      assert.deepEqual(true, addRegNum.regNoFromTown('CA 123'));
    });

    it('should return return true if registration number starts with CF.', function() {
      var addRegNum = AddRegNum();

      assert.deepEqual(true, addRegNum.regNoFromTown('CF 123'));
    });

    it('should return return true if registration number starts with CJ.', function() {
      var addRegNum = AddRegNum();

      assert.deepEqual(true, addRegNum.regNoFromTown('CJ 123'));
    });

    it('should return return true if registration number starts with CY.', function() {
      var addRegNum = AddRegNum();

      assert.deepEqual(true, addRegNum.regNoFromTown('CY 123'));
    });

    it('should return return false if registration number does not start with either CY, CA, CJ or CF.', function() {
      var addRegNum = AddRegNum();

      assert.deepEqual(false, addRegNum.regNoFromTown('CK 123'));
    });
});
