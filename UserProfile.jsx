function UserProfile() {
  const name = 'Julio Gonzalez';
  const bio =
    'Frontend enthusiast exploring React and modern web technologies.';
  const profileImage =
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face';

  return (
    <div
      style={{
        maxWidth: '380px',
        margin: '40px auto',
        padding: '20px',
        borderRadius: '14px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#fafafa',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        style={{
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '3px solid #d0d7de',
          marginBottom: '12px',
        }}
      />
      <h1 style={{ fontSize: '22px', fontWeight: 'bold', color: '#333' }}>
        {name}
      </h1>
      <p style={{ fontSize: '15px', color: '#666', marginTop: '6px' }}>{bio}</p>
    </div>
  );
}

export default UserProfile;
