function formatMessage(message, maxLength) {
  let messageLength = message.length;
  if (messageLength <= maxLength) {
   return message;
  } else {
    let newMessage = message.slice(0, maxLength);
    return `${newMessage}...`;
  }
}
console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); 
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); 