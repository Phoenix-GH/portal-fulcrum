import config from './roles.json'

export const hasScope = (target_activity) => {
  if (config.activities.includes(target_activity)) {
    return Object.keys(config.roles).filter((key) => key === 'owner' || config.roles[key].activities[target_activity])
  } else {
    // eslint-disable-next-line no-console
    console.log(target_activity + ' invalid activity')
    return []
  }
}

export const canManage = (target_role) => {
  if (config.roles[target_role]) {
    return Object.keys(config.roles).filter(
      (role) => role === 'owner' || config.roles[role].manageRoles.includes(target_role)
    )
  } else {
    // eslint-disable-next-line no-console
    console.log(target_role + ' invalid role')
    return []
  }
}

export const scopes = config.activities

export const roles = () => Object.keys(config.roles)
