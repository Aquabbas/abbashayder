# My personal Personal Website (V2)

.............................................................

## Solo Dev Workflow

### Pull Requests using GitHub CLI

.............................................................

**List Open PRs:**

```sh
gh pr list
```

...............................

**Create the PR (w/ commit info):**

```sh
gh pr create
--base main --head develop
--fill
--assignee @me --reviewer Aquabbas
```

...............................

**Create the PR (w/ your own words):**

```sh
gh pr create
--base main --head develop
--title "" --body ""
--assignee @me --reviewer Aquabbas
```

...............................

**Review the PR:**

```sh
gh pr review <PR_number>
```

- **note:** You can only **comment** and **merge** the PR,
  you can **NOT** **approve**, as the PR author.

...............................

**Merge the PR:**

```sh
gh pr merge <PR_number>
```

**GitHub PR CLI Definitions:**

.............................................................

- **--base** --> The `branch` into which you want your code merged
- --head --> The `branch` that contains commits for your pull request
  (default: current branch)

- **--fill** --> Do not prompt for title/body and just use commit info
- **--title** --> Title for the pull request
- **--body** --> Body for the pull request

- **--assignee** --> Assign people by their `login`. Use "@me" to self-assign.
- **--reviewer** --> Request reviews from people or teams by their `handle`

- **--label** --> Add labels by `name`

- **--web** --> Open the web browser to create a pull request

.............................................................
