import { Authenticate, Finish, Twitter } from "../generated/Contract/Contract"
import { IncubatorAuthenticate, IncubatorFinish, IncubatorTwitter } from "../generated/schema"

export function handleIncubatorAuthenticate(event: Authenticate): void {
  let entity = IncubatorAuthenticate.load(event.transaction.from.toHex())
  if (entity == null) {
    entity = new IncubatorAuthenticate(event.transaction.from.toHex())
  }

  entity.market = event.params._market
  entity.property = event.params._property
  entity.githubRepository = event.params._githubRepository

  entity.save()
}

export function handleIncubatorFinish(event: Finish): void {
  let entity = IncubatorFinish.load(event.transaction.from.toHex())
  if (entity == null) {
    entity = new IncubatorFinish(event.transaction.from.toHex())
  }

  entity.account = event.params._account
  entity.githubRepository = event.params._githubRepository
  entity.Reward = event.params._reward
  entity.Status = event.params._status

  entity.save()
}

export function handleIncubatorTwitter(event: Twitter): void {
  let entity = IncubatorTwitter.load(event.transaction.from.toHex())
  if (entity == null) {
    entity = new IncubatorTwitter(event.transaction.from.toHex())
  }

  entity.TwitterId = event.params._twitterId
  entity.githubRepository = event.params._githubRepository

  entity.save()
}
