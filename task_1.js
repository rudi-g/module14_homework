// parsing and converting xml into js object

const xmlContent = `
    <list>
      <student>
        <name lang="en">
          <first>Ivan</first>
          <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
      </student>
      <student>
        <name lang="ru">
          <first>Петр</first>
          <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
      </student>
    </list>
`;

const parser = new DOMParser;
const xmlDOM = parser.parseFromString(xmlContent, "text/xml");

const res = {list: []};

const studentNodes = xmlDOM.querySelectorAll('student');

studentNodes.forEach(student => {
    let nameNode = student.querySelector('name');
    let ageNode = student.querySelector('age');
    let profNode = student.querySelector('prof');

    let fullName = nameNode.firstElementChild.textContent + ' ' + nameNode.lastElementChild.textContent;
    let langAttr = nameNode.getAttribute('lang');

    res.list.push({
        name: fullName, 
        age: Number(ageNode.textContent), 
        prof: profNode.textContent, 
        lang: langAttr
    });
});

console.log(res);