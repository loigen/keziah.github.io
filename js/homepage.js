function openModal(photoUrl) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('modal-content');
    modal.style.display = 'block';
    modalImg.src = photoUrl;
  }
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  function showAll() {
    // Show all photos
    var galleryImages = document.querySelectorAll('.galleryPhotos img');
    galleryImages.forEach(function(img) {
      img.style.display = 'block';
    });
    document.getElementById('seeAllBtn').style.display = 'none';
      // Show the "Show Few" button
      document.getElementById('showFewBtn').style.display = 'block';
    }

    function showFew() {
        // Hide extra photos, display only a few
        var galleryImages = document.querySelectorAll('.galleryPhotos img');
        for (var i = 9; i < galleryImages.length; i++) {
          galleryImages[i].style.display = 'none';
        }
        // Show the "See All" button
        document.getElementById('seeAllBtn').style.display = 'block';
        // Hide the "Show Few" button
        document.getElementById('showFewBtn').style.display = 'none';
      }


      //another container
      function showAll2() {
        // Show all photos
        var galleryImages1 = document.querySelectorAll('.galleryPhotosForFunnyPhotos img');
        galleryImages1.forEach(function(img) {
          img.style.display = 'block';
        });
        document.getElementById('seeAllBtn2').style.display = 'none';
          // Show the "Show Few" button
          document.getElementById('showFewBtn2').style.display = 'block';
        }
    
        function showFew2() {
            // Hide extra photos, display only a few
            var galleryImages1 = document.querySelectorAll('.galleryPhotosForFunnyPhotos img');
            for (var i = 9; i < galleryImages1.length; i++) {
              galleryImages1[i].style.display = 'none';
            }
            // Show the "See All" button
            document.getElementById('seeAllBtn2').style.display = 'block';
            // Hide the "Show Few" button
            document.getElementById('showFewBtn2').style.display = 'none';
          }