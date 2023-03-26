const crypto = require("crypto");

function hashedCandidate(data) {
 return crypto.createHash("sha3-512").update(data).digest("hex");
}

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = TRIVIAL_PARTITION_KEY;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey.toString();
    } else {
      const data = JSON.stringify(event);
      candidate = hashedCandidate(data);
    }
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = hashedCandidate(candidate);
  }

  return candidate;
};