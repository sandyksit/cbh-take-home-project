const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  it('returns a string', () => {
    const event = { name: 'test' };
    const result = deterministicPartitionKey(event);
    expect(typeof result).toBe('string');
  });

  it('returns the partition key of the event if it exists', () => {
    const event = { name: 'test', partitionKey: '123' };
    const result = deterministicPartitionKey(event);
    expect(result).toBe('123');
  });

  it('returns a hashed partition key if no partition key exists in the event', () => {
    const event = { name: 'test' };
    const result = deterministicPartitionKey(event);
    expect(result).not.toBe('0');
    expect(result).not.toBe(event.partitionKey);
  });

  it('hashes the partition key if it exceeds the maximum length', () => {
    const longKey = 'a'.repeat(300);
    const event = { name: 'test', partitionKey: longKey };
    const result = deterministicPartitionKey(event);
    expect(result).not.toBe(longKey);
  });

});
