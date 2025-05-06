document.addEventListener('DOMContentLoaded', function() {
    const profilePictureInput = document.getElementById('profilePictureInput');
    const profilePicture = document.getElementById('profilePicture');
    
    // Verifica se há uma foto salva no localStorage
    const savedPhoto = localStorage.getItem('profilePhoto');
    if (savedPhoto) {
        profilePicture.src = savedPhoto;
    }
    
    profilePictureInput.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            
            reader.onload = function(event) {
                profilePicture.src = event.target.result;
                
                localStorage.setItem('profilePhoto', event.target.result);
            };
            
            reader.readAsDataURL(e.target.files[0]);
        }
    });
    
    function uploadPhotoToServer(file) {
        const formData = new FormData();
        formData.append('profilePhoto', file);
        
        fetch('/api/upload-profile-photo', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Foto atualizada com sucesso:', data);
        })
        .catch(error => {
            console.error('Erro ao enviar foto:', error);
        });
    }
});
