import {request} from '@/utils/Request';

const FIND_MENU_LIST = '/menu/findMenuList';

export default {

  /**
   *
   */
  findMenuList() {
    return request({
      url: FIND_MENU_LIST,
      method: 'get'
    })
  }
}
