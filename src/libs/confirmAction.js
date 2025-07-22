import Swal from 'sweetalert2';

export const confirmAction = ({
  callback,
  title = 'Are you sure?',
  icon = 'warning',
  confirmButtonText = 'Delete',
  showCancelButton = true,
}) => {
  Swal.fire({
    title,
    text: '',
    icon,
    showCancelButton: showCancelButton,
    confirmButtonText,
    confirmButtonColor: 'var(--orange)',
    cancelButtonColor: '#000',
    didRender: () => {
      const cancelButton = Swal.getCancelButton();
      if (cancelButton) {
        cancelButton.style.backgroundColor = 'transparent';
        cancelButton.style.border = '1px solid #181222';
        cancelButton.style.color = '#000';
      }
    },
  }).then(result => {
    callback(result.isConfirmed);
  });
};
