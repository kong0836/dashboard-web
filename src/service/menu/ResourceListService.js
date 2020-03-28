import request from '@/utils/Request';

const FIND_RESOURCE_LIST = '/menu/findMenuList';

export default {

  /**
   *
   */
  findResourceList() {
    return request({
      url: FIND_RESOURCE_LIST,
      method: 'get'
    })
  }
}
