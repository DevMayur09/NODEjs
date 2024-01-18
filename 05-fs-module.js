const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/subfolder/sub_sub_folder/first.txt','utf8');
const second = readFileSync('./content/subfolder/sub_sub_folder/second.txt','utf8');

console.log(first,second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : modified` ,{flag: 'a'}
)