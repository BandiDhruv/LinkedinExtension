const luffyImage= 'https://myblogiumbk1.s3.ap-southeast-2.amazonaws.com/images.jpeg';

function replaceProfilePics() {
  const dynamiClassNames = [
    'EntityPhoto-circle-1',
    'EntityPhoto-circle-2',
    'EntityPhoto-circle-3'
  ];

  dynamiClassNames.forEach(c => {
    const classNameForThatProfileToChange = document.querySelectorAll(`ivm-view-attr__img--centered ${c}`);
    classNameForThatProfileToChange.forEach(e => {
      e.src = newImageUrl;
    });
  });
}

replaceProfilePics();

const observer = new MutationObserver(replaceProfilePics);
observer.observe(document.body, { childList: true, subtree: true });
