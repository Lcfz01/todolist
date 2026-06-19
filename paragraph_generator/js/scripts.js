const paragraphs = [
'Elit do ea ex magna incididunt sit eu veniam. Fugiat sit consectetur dolore pariatur excepteur do sit eu occaecat. Ullamco est ipsum consequat veniam proident esse cupidatat cillum. Deserunt cupidatat adipisicing labore culpa tempor tempor. Occaecat et commodo do culpa elit quis deserunt.',
'Dolor consequat et nostrud velit cillum quis est mollit occaecat cillum amet ut. Ut ad ad mollit pariatur exercitation id in. Do nisi consectetur anim deserunt laborum mollit adipisicing ullamco do ea ad. Aliqua elit occaecat Lorem aliquip duis irure culpa aliquip excepteur fugiat. Duis non Lorem ipsum duis reprehenderit. Aliquip nulla tempor culpa adipisicing tempor aliquip laborum magna duis elit sunt voluptate non velit.',
'Dolore aute occaecat velit laborum qui laborum aliquip anim. Ea anim enim pariatur culpa laborum ad anim est sit veniam ex irure enim. Lorem ex enim nulla ea amet ex incididunt fugiat exercitation anim reprehenderit sit exercitation ullamco. Sint commodo in laborum proident magna occaecat exercitation ea pariatur irure. Non sit anim quis occaecat reprehenderit. Ut sit aliquip laboris nostrud et ut.',
'Pariatur proident esse adipisicing dolor anim eu. Enim eu nulla ex sint est. Deserunt ipsum aute tempor mollit voluptate et. Laborum officia proident aliqua cillum excepteur irure aliqua qui ex amet sint. Officia ad laboris mollit tempor Lorem elit aute quis eiusmod. Veniam occaecat et est est magna id quis esse reprehenderit qui minim cupidatat. Proident nisi ex cillum consectetur enim ut sint ad aliquip ex ad consectetur officia et.',
'Enim sunt amet adipisicing velit cupidatat laboris ea do esse nulla. Deserunt do ut dolore consectetur qui exercitation ex aute sit dolore sit tempor deserunt. Mollit id tempor occaecat proident ut nulla ad pariatur id. Id ex eu dolor magna deserunt dolor laboris enim.',
'Magna anim pariatur anim eu eu laboris nostrud qui. Consequat deserunt laborum aute adipisicing anim Lorem duis pariatur aliquip id reprehenderit ad ullamco fugiat. Elit labore elit cupidatat dolor eiusmod in in. Ullamco deserunt dolor velit dolor proident ad excepteur veniam dolore cillum qui sint sunt. Incididunt ea quis mollit velit.',
'Cupidatat est ut exercitation irure consectetur mollit anim anim elit aliquip nulla deserunt aliquip. Elit nisi id laborum ipsum veniam ullamco nulla in cupidatat. Ea ipsum qui quis consequat.',
'Eiusmod quis consectetur nulla ipsum minim ipsum irure cupidatat reprehenderit. Dolore aliqua eu sint aute ad excepteur enim aliquip Lorem qui. Ea minim adipisicing laboris voluptate irure exercitation. Fugiat Lorem deserunt in non velit excepteur. Dolor aliqua magna fugiat esse tempor esse et commodo pariatur ea non sunt.',
'Id do nulla adipisicing mollit dolor cillum reprehenderit. Adipisicing nostrud nostrud ut veniam irure irure. Eu est ea labore culpa nulla dolore Lorem mollit esse adipisicing nulla Lorem laborum. Aliquip occaecat aliqua ullamco cupidatat ipsum nisi fugiat.',
'Et cupidatat qui culpa irure velit aute id ad reprehenderit adipisicing elit consequat nisi. Cillum ex in do culpa eiusmod adipisicing excepteur esse occaecat. Laborum aliquip aute fugiat est est deserunt. Laboris veniam nulla ipsum elit qui sit amet officia aliquip officia pariatur. Ex ex eu cillum eiusmod reprehenderit ipsum cupidatat qui. Et ea proident aute nisi culpa.'
];

const inputItems = document.getElementById("inputItems");
const dataContainer = document.getElementById("paragraphs");

function shuffle(array){
    let currentIndex = array.length;
    let randomIndex;

    while(currentIndex!=0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex--;

        [array[currentIndex],array[randomIndex]] = [
            array[randomIndex],array[currentIndex]
        ];
    }
    return array;
}

function generate(){
    const nItems = inputItems.value;
    if (nItems == 0){
        alert("Number can not be 0 "+nItems);
    }else if(nItems > paragraphs.length){
        alert("There could be errors in generating more than 10 paragraphs");
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        dataContainer.innerHTML = `<p>${paragraphs[randomIndex]}</p>`;
    }else{
        const shuffleParag = paragraphs;
        shuffle(paragraphs);
        const selectedParagraphs = shuffleParag.slice(0,nItems);
        const paragraphsHTML = selectedParagraphs.map(paragraphs => `<p>${paragraphs}</p>`).join("");
        dataContainer.innerHTML = paragraphsHTML;
    }

}