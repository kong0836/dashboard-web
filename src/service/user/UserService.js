import Request from '@/utils/Request';

export default {

  /**
   * 新建用户
   * @param data
   * @returns {*}
   */
  createUser(data) {
    return Request({
      url: '',
      method: 'post',
      data
    })
  }
}
