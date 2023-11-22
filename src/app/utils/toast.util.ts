import { ToastrService } from 'ngx-toastr';

export class Toast {
  constructor(private toast: ToastrService) {}
  alertError(message: string) {
    return this.toast.error('', message, { timeOut: 3000, progressBar: true });
  }
  alertSuccess(message: string) {
    return this.toast.success('', message, {
      timeOut: 3000,
      progressBar: true,
    });
  }
  alertInfo(message: string) {
    return this.toast.info('', message, { timeOut: 3000, progressBar: true });
  }
}
