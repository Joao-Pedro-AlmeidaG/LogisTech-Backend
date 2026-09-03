const generateTrackingCode = () => {
  const randomDigits = Math.floor(100000 + Math.random() * 900000);
  return `LOG-${randomDigits}`;
};

module.exports = generateTrackingCode;
