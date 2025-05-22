function updateContactInfo() {
    let email = prompt("Enter your email:");
    let telephone_number = prompt("Enter your phone number:");
    let address = prompt("Enter your address:");
  
    if (!email.includes('@') || !email.includes('.')) {
      alert("Invalid email format.");
      return;
    }
  
    const contactSection = $('#contact');
  
    contactSection.find('p.text-muted').each(function () {
      if ($(this).text().includes('@')) {
        $(this).text(email);
      } else if ($(this).text().match(/\d{3}[-.\s]?\d{3}[-.\s]?\d{4}/)) {
        $(this).text(telephone_number);
      } else {
        $(this).text(address);
      }
    });
  
    console.log(`From: ${email}\nContact: ${telephone_number}\nAddress: ${address}`);
  }
  