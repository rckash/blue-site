const crew = [
    {
      "name": "Alice Johnson",
      "jobTitle": "Software Engineer",
      "profilePicture": "https://picsum.photos/100",
      "socials": {
        "facebook": "https://facebook.com/alicejohnson",
        "twitter": "https://twitter.com/alicejohnson"
      }
    },
    {
      "name": "Bob Smith",
      "jobTitle": "Graphic Designer",
      "profilePicture": "https://picsum.photos/100",
      "socials": {
        "instagram": "https://instagram.com/bobsmith"
      }
    },
    {
      "name": "Carol Davis",
      "jobTitle": "Product Manager",
      "profilePicture": "https://picsum.photos/100",
      "socials": {}
    },
    {
      "name": "David Brown",
      "jobTitle": "Marketing Specialist",
      "profilePicture": "https://picsum.photos/100",
      "socials": {
        "facebook": "https://facebook.com/davidbrown",
        "twitter": "https://twitter.com/davidbrown",
        "instagram": "https://instagram.com/davidbrown"
      }
    },
    {
      "name": "Eva Miller",
      "jobTitle": "UX Designer",
      "profilePicture": "https://picsum.photos/100",
      "socials": {
        "twitter": "https://twitter.com/evamiller"
      }
    },
    {
      "name": "Frank Wilson",
      "jobTitle": "Data Analyst",
      "profilePicture": "https://picsum.photos/100",
      "socials": {
        "facebook": "https://facebook.com/frankwilson",
        "instagram": "https://instagram.com/frankwilson"
      }
    },
    {
      "name": "Grace Lee",
      "jobTitle": "Content Writer",
      "profilePicture": "https://picsum.photos/100",
      "socials": {}
    },
    {
      "name": "Henry Adams",
      "jobTitle": "Web Developer",
      "profilePicture": "https://picsum.photos/100",
      "socials": {
        "twitter": "https://twitter.com/henryadams",
        "instagram": "https://instagram.com/henryadams"
      }
    },
    {
      "name": "Isabella White",
      "jobTitle": "SEO Specialist",
      "profilePicture": "https://picsum.photos/100",
      "socials": {
        "facebook": "https://facebook.com/isabellawhite"
      }
    },
    {
      "name": "James Taylor",
      "jobTitle": "Customer Support",
      "profilePicture": "https://picsum.photos/100",
      "socials": {}
    },
    {
      "name": "Katherine Clark",
      "jobTitle": "HR Manager",
      "profilePicture": "https://picsum.photos/100",
      "socials": {
        "facebook": "https://facebook.com/katherineclark"
      }
    },
    {
      "name": "Liam Harris",
      "jobTitle": "Sales Executive",
      "profilePicture": "https://picsum.photos/100",
      "socials": {
        "twitter": "https://twitter.com/liamharris",
        "instagram": "https://instagram.com/liamharris"
      }
    },
    {
      "name": "Mia Walker",
      "jobTitle": "Software Tester",
      "profilePicture": "https://picsum.photos/100",
      "socials": {}
    },
    {
      "name": "Nathan Scott",
      "jobTitle": "Business Analyst",
      "profilePicture": "https://picsum.photos/100",
      "socials": {
        "twitter": "https://twitter.com/nathanscott",
        "instagram": "https://instagram.com/nathanscott"
      }
    },
    {
      "name": "Olivia Lewis",
      "jobTitle": "Project Manager",
      "profilePicture": "https://picsum.photos/100",
      "socials": {
        "facebook": "https://facebook.com/olivialewis",
        "twitter": "https://twitter.com/olivialewis"
      }
    },
    {
      "name": "Paul Young",
      "jobTitle": "Financial Analyst",
      "profilePicture": "https://picsum.photos/100",
      "socials": {
        "instagram": "https://instagram.com/paulyoung"
      }
    },
    {
      "name": "Quinn Robinson",
      "jobTitle": "Graphic Designer",
      "profilePicture": "https://picsum.photos/100",
      "socials": {
        "facebook": "https://facebook.com/quinnrobinson"
      }
    }
]

const gridSmallCards = document.getElementsByClassName("grid-small__cards")[0];

for (i = 0; i < crew.length; i++) {
    const crewCard = document.createElement("div");
    crewCard.classList.add("crew-card");

    const crewProfilePicture = document.createElement("IMG");
    crewProfilePicture.classList.add("crew-card__img");
    crewProfilePicture.src = crew[i].profilePicture;
    crewCard.appendChild(crewProfilePicture);

    const crewName = document.createElement("p");
    const crewNameText = document.createTextNode(crew[i].name);
    crewName.appendChild(crewNameText);
    crewName.classList.add("crew-card__title");
    crewCard.appendChild(crewName);

    const crewJobTitle = document.createElement("p");
    const crewJobTitleText = document.createTextNode(crew[i].jobTitle);
    crewJobTitle.appendChild(crewJobTitleText);
    crewJobTitle.classList.add("crew-card__subtitle");
    crewJobTitle.classList.add("is-small");
    crewCard.appendChild(crewJobTitle);

    // Socials
    const hasFacebook = 'facebook' in crew[i].socials;
    const hasInstagram = 'instagram' in crew[i].socials;
    const hasTwitter = 'twitter' in crew[i].socials;

    const crewCardSocialLinks = document.createElement("div");
    crewCardSocialLinks.classList.add("crew-card__social-links");

    const crewCardRowSmallGap = document.createElement("div");
    crewCardRowSmallGap.classList.add("row-small-gap");
    crewCardSocialLinks.appendChild(crewCardRowSmallGap);

    if (hasFacebook) {
        console.log("We have the facebook");
        const facebookImg = document.createElement("IMG");
        facebookImg.src = "/images/fa-facebook-square.png";
        crewCardRowSmallGap.appendChild(facebookImg); 
    }

    if (hasInstagram) {
        console.log("We have the Instagram");
        const instagramImg = document.createElement("IMG");
        instagramImg.src = "/images/fa-instagram.png";
        crewCardRowSmallGap.appendChild(instagramImg); 
    }

    if (hasTwitter) {
        console.log("We have the Twitter");
        const twitterImg = document.createElement("IMG");
        twitterImg.src = "/images/fa-twitter.png";
        crewCardRowSmallGap.appendChild(twitterImg); 
    }

    crewCard.appendChild(crewCardSocialLinks);

    gridSmallCards.appendChild(crewCard);

}
  
  