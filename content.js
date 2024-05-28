const luffyImage= 'https://myblogiumbk1.s3.ap-southeast-2.amazonaws.com/images.jpeg';

function replaceProfilePics() {
  const dynamiClassNames = [
    'EntityPhoto-circle-1',
    'EntityPhoto-circle-0',
    'EntityPhoto-circle-2',
    'EntityPhoto-circle-3',
    'EntityPhoto-square-3',
    'EntityPhoto-square-0',
    'EntityPhoto-square-1',
    'EntityPhoto-square-2',
  ];
  

  dynamiClassNames.forEach(c => {
    const classNameForThatProfileToChange = document.getElementsByClassName(`ivm-view-attr__img--centered ${c}  update-components-actor__avatar-image`);
    Array.from(classNameForThatProfileToChange).forEach(e => {
      e.src = luffyImage;
    });
  });
}
console.log("hilo")
replaceProfilePics();

const observer = new MutationObserver(replaceProfilePics);
observer.observe(document.body, { childList: true, subtree: true });
