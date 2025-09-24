export default function decorate(block) {
    // Create form
    const form = document.createElement('form');
    form.classList.add('registration-form');
  
    // Account Type (radio buttons)
    const accountTypeWrapper = document.createElement('div');
    accountTypeWrapper.classList.add('form-group');
  
    const accountLabel = document.createElement('label');
    accountLabel.textContent = 'Account type:';
    accountTypeWrapper.appendChild(accountLabel);
  
    ['Retailer/Partner', 'Agency/Vendor Partner', 'Employee'].forEach((type, idx) => {
      const radioWrapper = document.createElement('div');
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'accountType';
      radio.value = type;
      if (idx === 0) radio.checked = true;
  
      const radioLabel = document.createElement('label');
      radioLabel.textContent = type;
  
      radioWrapper.appendChild(radio);
      radioWrapper.appendChild(radioLabel);
      accountTypeWrapper.appendChild(radioWrapper);
    });
  
    // Helper: create input fields
    function createInput(type, name, placeholder, required = true) {
      const input = document.createElement('input');
      input.type = type;
      input.name = name;
      input.placeholder = placeholder;
      if (required) input.required = true;
      return input;
    }
  
    // Fields
    const firstName = createInput('text', 'firstName', 'First name *');
    const lastName = createInput('text', 'lastName', 'Last name *');
    const email = createInput('email', 'email', 'Email *');
    const company = createInput('text', 'companyName', 'Company name *');
    const website = createInput('url', 'website', 'Website *');
    const salesRep = createInput('text', 'salesRep', 'Sales Representative Name');
    
    // Brands textarea
    const brands = document.createElement('textarea');
    brands.name = 'brands';
    brands.placeholder = 'Brands we carry/represent *';
    brands.required = true;
  
    // Security check placeholder
    const securityLabel = document.createElement('h3');
    securityLabel.textContent = 'Security Check';
  
    const captcha = createInput('text', 'captcha', 'Enter security text *');
  
    // Submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Register';
  
    // Append everything
    form.appendChild(accountTypeWrapper);
    form.appendChild(firstName);
    form.appendChild(lastName);
    form.appendChild(email);
    form.appendChild(company);
    form.appendChild(website);
    form.appendChild(salesRep);
    form.appendChild(brands);
    form.appendChild(securityLabel);
    form.appendChild(captcha);
    form.appendChild(submitBtn);
  
    // Replace block content
    block.innerHTML = '';
    block.appendChild(form);
  
    // Form handler (for now: just log data)
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      // TODO: send data to backend/IMS
      console.log('Form submitted:', Object.fromEntries(data.entries()));
      alert('Registration submitted (demo)');
    });
  }
  