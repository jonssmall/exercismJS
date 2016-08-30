var cbObj = require('./circular-buffer');
var circularBuffer = require('./circular-buffer').circularBuffer;
var bufferEmptyException = require('./circular-buffer').bufferEmptyException;
var bufferFullException = require('./circular-buffer').bufferFullException;

describe('CircularBuffer', function() {

  it('reading an empty buffer throws a BufferEmptyException', function() {            
    var buffer = circularBuffer(1);    
    expect(buffer.read).toThrow(bufferEmptyException());
  });

  it('write and read back one item', function() {
    var buffer = circularBuffer(1);
    buffer.write('1');
    expect(buffer.read()).toBe('1');
    expect(buffer.read).toThrow(bufferEmptyException());
  });

  it('write and read back multiple items', function() {
    var buffer = circularBuffer(2);
    buffer.write('1');
    buffer.write('2');
    expect(buffer.read()).toBe('1');
    expect(buffer.read()).toBe('2');
    expect(buffer.read).toThrow(bufferEmptyException());
  });

  it('clearing a buffer', function() {
    var buffer = circularBuffer(2);
    buffer.write('1');
    buffer.write('2');
    buffer.clear();
    expect(buffer.read).toThrowError;
    buffer.write('3');
    buffer.write('4');
    expect(buffer.read()).toBe('3');
    expect(buffer.read()).toBe('4');
  });

  it('alternate write and read', function() {
    var buffer = circularBuffer(2);
    buffer.write('1');
    expect(buffer.read()).toBe('1');
    buffer.write('2');
    expect(buffer.read()).toBe('2');
  });

  it('reads back oldest item', function() {
    var buffer = circularBuffer(3);
    buffer.write('1');
    buffer.write('2');
    buffer.read();
    buffer.write('3');
    expect(buffer.read()).toBe('2');
    expect(buffer.read()).toBe('3');
  });

  it('writes of undefined or null don\'t occupy buffer', function() {
    var buffer = circularBuffer(3);
    buffer.write(null);
    buffer.write(undefined);
    [1,2,3].map(function(i) { buffer.write(i.toString()); });
    expect(buffer.read()).toBe('1');
  });

  it('writing to a full buffer throws a BufferFullException', function() {
    var buffer = circularBuffer(2);
    buffer.write('1');
    buffer.write('2');
    expect(function() {
      buffer.write('A');
    }).toThrow(bufferFullException());
  });

  it('forced writes over write oldest item in a full buffer', function() {
    var buffer = circularBuffer(2);
    buffer.write('1');
    buffer.write('2');
    buffer.forceWrite('A');
    expect(buffer.read()).toBe('2');
    expect(buffer.read()).toBe('A');
    expect(buffer.read).toThrow(bufferEmptyException());
  });

  xit('forced writes act like write in a non-full buffer', function() {
    var buffer = circularBuffer(2);
    buffer.write('1');
    buffer.forceWrite('2');
    expect(buffer.read()).toBe('1');
    expect(buffer.read()).toBe('2');
    expect(buffer.read).toThrow(bufferEmptyException());
  });

  it('alternate force write and read into full buffer', function() {
    var buffer = circularBuffer(5); //[][][][][]
    [1,2,3].map(function(i) { buffer.write(i.toString()); }); //[1][2][3][][]
    buffer.read(); //[][2][3][][]
    buffer.read(); //[][][3][][]
    buffer.write('4'); //[][][3][4][]
    buffer.read(); //[][][][4][]
    [5,6,7,8].map(function(i) { buffer.write(i.toString()); }); //[6][7][8][4][5]
    buffer.forceWrite('A'); //[6][7][8][A][5]
    buffer.forceWrite('B'); //[6][7][8][A][B]
    expect(buffer.read()).toBe('6');
    expect(buffer.read()).toBe('7');
    expect(buffer.read()).toBe('8');
    expect(buffer.read()).toBe('A');
    expect(buffer.read()).toBe('B');
    expect(buffer.read).toThrow(bufferEmptyException());
  });

});
