export default function decorate(block) {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get('access_token');
  
    if (token) {
      localStorage.setItem('ims_token', token);
      block.innerHTML = '<p>Login successful! Redirecting...</p>';
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } else {
      block.innerHTML = '<p>Login failed. Please try again.</p>';
    }
  }
  